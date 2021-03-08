// create a default store and initialize state with it
// because on login/logout one can reset the state to the default state
const getDefaultState = () => {
  return {};
};
// initial state
const state = getDefaultState();

const getters = {};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
