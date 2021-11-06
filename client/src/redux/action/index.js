import { GET_AVATAR } from "../constants";

export const getAvatar = (payload) => ({
  type: GET_AVATAR,
  payload: payload,
});
