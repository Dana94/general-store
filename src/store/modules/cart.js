const state = {
  total: 0,
  list: []
};

const mutations = {
  ADD_ITEM(state, { item, amount }) {
    // check if item is already in list
    let itemMatch = state.list.find(anItem => {
      return anItem.food === item.food;
    });

    if (itemMatch) {
      itemMatch.amount += amount;
    } else {
      state.list.push({
        food: item.food,
        amount
      });
    }
    state.total += item.price * amount;
  }
};

const actions = {
  addItem({ commit }, payload) {
    commit("ADD_ITEM", payload);
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
