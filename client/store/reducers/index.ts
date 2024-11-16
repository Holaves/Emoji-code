import { combineReducers } from "redux";
// import { playerReducer } from "./playerReducer";
import { HYDRATE } from "next-redux-wrapper";
import { sizeReducer } from "./sizeReducer";
// import { trackReducer } from "./trackReducer";
// import { sizeReducer } from "./sizeReducer";
// import { albumReducer } from "./albumReducer";
// import { playlistReducer } from "./playlistReducer";

export const rootReducer = combineReducers({
    size: sizeReducer,
})

//@ts-ignore
export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    } else {
    //@ts-ignore
      return rootReducer(state, action);
    }
  };

export type RootState = ReturnType<typeof rootReducer>