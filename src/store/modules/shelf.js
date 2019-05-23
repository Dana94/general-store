import food from "../../data/food";

const state = {
  food: []
};

const mutations = {
  'SET_SHELF'(state, food){
    state.food = food;
  }
};

const actions = {
  initShelf({commit}){
    commit('SET_SHELF', food);
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
