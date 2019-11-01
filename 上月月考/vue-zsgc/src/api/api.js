import instance from "../request/request";

export const login = ({ username, password }) => {
  const url = "/api/user/login";
  return instance.post(url, { username, password });
};

export const getxslist = () => {
  const url = "/api/getxslist";
  return instance(url);
};

export const delxslist = ({ id }) => {
  const url = "/api/delxslist";
  return instance.post(url, { id });
};
