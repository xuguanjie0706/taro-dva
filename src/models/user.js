
// import key from 'keymaster';

export default {
  namespace: 'user',
  state: {
    data: [],
    key: '72eed010c976e448971655b56fc2324e',
    v: '1.0',
    age: 10
  },

  effects: {
    // * getLists({ payload }, { select, call, put }) {
    // const { key, v } = yield select(state => state.index)
    // const { error, result } = yield call(indexApi.getLists, {
    //   key,
    //   v,
    //   ...payload
    // })
    // if (!error) {
    //   yield put({
    //     type: 'updateState',
    //     payload: {
    //       data: result
    //     }
    //   })
    // }
    // }
  },

  reducers: {
    updateState(state, { payload: data }) {
      return { ...state, ...data }
    }
  },
  subscriptions: {
    // keyEvent({ dispatch }) {
    //   key("1", () => { dispatch({ type: "add" }) })
    // },
  }
}