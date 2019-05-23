const state = {
  // TODO: reset
  total: 10,
  list: [
    {
      food: "apple",
    },
    {
      food: "chocolate",
    }
  ]
};

const mutations = {
  'ADD_ITEM'(state, { food, price }) {
    state.list.push({
      food
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
