import Vuex from 'vuex'
import ordered from '~/.docgen/ordered.json'
import menu from '~/.docgen/menu.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      ordered,
      menu,
      activeMenuPath: '',
      codelang: 'bash'
    },
    mutations: {
      SET_CODELANG(state, codelang) {
        window.localStorage.codelang = codelang
        state.codelang = codelang
      },
      SET_ACTIVE_MENU_PATH(state, activeMenuPath) {
        state.activeMenuPath = activeMenuPath
      }
    },
    actions: {
      
    }
  })
}
  
export default createStore