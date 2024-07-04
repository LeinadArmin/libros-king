import Vuex from 'vuex';
import axios from 'axios';
import credentials from '@/data/credentials.json'; // Importa el archivo JSON


export default new Vuex.Store({
  state: {
    libros: [],  // Aquí almacenaremos los libros obtenidos de la API
    user: null,
    authError: null,
  },

  mutations: {
    setLibros(state, libros) {
      state.libros = libros;
    },
    setUser(state, user) {
      state.user = user;
    },
    setAuthError(state, error) {
      state.authError = error;
    }
  },

  actions: {
    async fetchLibros({ commit }) {
      try {
        const response = await axios.get('https://stephen-king-api.onrender.com/api/books');
        commit('setLibros', response.data.data); // Asumiendo que la respuesta tiene una propiedad 'data' con los libros
      } catch (error) {
        console.error('Error fetching libros:', error);
      }
    },

    login({ commit }, { username, password }) {
      const validUser = credentials.user; // Usa los datos del archivo JSON

      if (username === validUser.username && password === validUser.password) {
        commit('setUser', validUser);
        commit('setAuthError', null);
      } else {
        commit('setAuthError', 'Nombre de usuario o contraseña incorrectos');
      }
    },
    
    logout({ commit }) {
      commit('setUser', null);
    }
  },

  getters: {
    getLibroById: (state) => (id) => {
      return state.libros.find(libro => libro.id === parseInt(id));
    },
    isAuthenticated: state => !!state.user,
    authError: state => state.authError
  }
});
