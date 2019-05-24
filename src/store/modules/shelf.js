import food from "../../data/food";

const state = {
  food: []
};

const mutations = {
  'SET_SHELF'(state, food){
    state.food = food;
  },
  'TAKE_ITEM'(state, id) {
    let item = state.food.find(anItem => {
      return anItem.id == id;
    });
    item.inStock -= 1;
  }
};

const actions = {
  initShelf({commit}){
    commit('SET_SHELF', food);
  },
  takeItem({commit}, {id}){
    commit('TAKE_ITEM', id);
  }
};

const getters = {
  stockShelf(state) {
    return state.food;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
