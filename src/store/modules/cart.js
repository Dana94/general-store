const state = {
  total: 0,
  list: []
}

const mutations = {

  'ADD_ITEM'(state, {food, amount, price}) {
    state.list.push({
      food,
      amount
    });
    state.total += price;
  }
}

const actions = {
    addItem() {

    }
}

const getters = {

  list(state) {
    return state.list;
  },

  total(state) {
    return state.total;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
