export default function createReducer(initialState, actionHandlers) {
  return (state = initialState, action) => {
    const reduceFn = actionHandlers[action.type];
    return reduceFn ? reduceFn(state, action) : state;
  };
}
