import { combineReducers } from "redux";

const allVideoReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_VIDEO":
      return action.data;
    default:
      return state;
  }
};

const findVideo = (state = {}, action) => {
  switch (action.type) {
    case "FIND_ID":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  allVideo: allVideoReducer,
  findVideo: findVideo,
});

export default rootReducer;
