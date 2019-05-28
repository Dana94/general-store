import food from "../../data/food";

const state = {
  food: []
};

const mutations = {
  'SET_SHELF'(state, food){
    state.food = food;
  },
  'TAKE_ITEM'(state, { id, amount } ) {
    let item = state.food.find(anItem => {
      return anItem.id == id;
    });
    item.inStock -= amount;
  }
};

const actions = {
  initShelf({commit}){
    commit('SET_SHELF', food);
  },
  takeItem({commit}, payload){
    commit('TAKE_ITEM', payload);
  }
};

const getters = {
  stockShelf(state) {
    return state.food;
  },
  checkStock(state) {
    return state.food
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
