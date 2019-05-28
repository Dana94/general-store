const state = {
  total: 0,
  list: []
};

const mutations = {
  'ADD_ITEM'(state, { item, amount}) {
    console.log(amount);
    state.list.push({
      food: item.food,
      amount
    });
    state.total += item.price * amount;
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
