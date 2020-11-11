import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';


export default createStore(
  {
    state: {
        user: null
    },
    plugins: [createPersistedState()],
    mutations: {
        setAuthUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.user !== null;
        },
        getUserIn(state){
          return state.user;
        }
    }
}
);
