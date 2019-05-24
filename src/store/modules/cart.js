const state = {
  total: 0,
  list: []
};

const mutations = {
  'ADD_ITEM'(state, { food, price }) {
    state.list.push({
      food,
      amount: 1
    });
    state.total += price;
  }
};

const actions = {
  addItem({ commit }, payload) {
    commit('ADD_ITEM', payload)
  }
};

const getters = {
  list(state) {
    return state.list;
  },

  total(state) {
    return state.total;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
