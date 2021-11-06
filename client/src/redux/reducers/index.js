import { GET_AVATAR } from "../constants";
import { combineReducers } from "redux";

const getAvatar = (state = [], action) => {
  switch (action.type) {
    case GET_AVATAR:
      return "avatar";
    default:
      return state;
  }
};

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
  getAvatar: getAvatar,
});

export default rootReducer;
