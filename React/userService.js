import axios from "axios";
import {
  onGlobalError,
  onGlobalSuccess,
  API_HOST_PREFIX,
} from "./serviceHelpers";

const endpoint = { userService: `${API_HOST_PREFIX}/api/users` };

const registerUser = (payload) => {
  const config = {
    method: "POST",
    url: `${endpoint.userService}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const onGetUsers = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${endpoint.userService}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const onClickSearchUser = (query, pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${endpoint.userService}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const onDeactivateClick = (payload) => {
  const config = {
    method: "PUT",
    url: `${endpoint.userService}/${payload.id}/status/${payload.statusId}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const loginUser = (payload) => {
  const config = {
    method: "POST",
    url: `${endpoint.userService}/login`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const onActivateClick = (payload) => {
  const config = {
    method: "PUT",
    url: `${endpoint.userService}/${payload.id}/status/${payload.statusId}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const logoutUser = () => {
  const config = {
    method: "POST",
    url: `${endpoint.userService}/logout`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const getCurrent = () => {
  const config = {
    method: "GET",
    url: `${endpoint.userService}/current`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const confirmEmail = (token, email) => {
  const config = {
    method: "PUT",
    url: `${endpoint.userService}/confirm?token=${token}&email=${email}`,
    withCredentials: true,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const forgotPassword = (email) => {
  const config = {
    method: "PUT",
    url: `${endpoint.userService}/forgot?email=${email}`,
    withCredentials: true,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const changePassword = (payload) => {
  const config = {
    method: "PUT",
    url: `${endpoint.userService}/changepassword?token=${payload.token}&email=${payload.email}`,
    data: payload,
    withCredentials: true,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const userService = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrent,
  confirmEmail,
  onGetUsers,
  onClickSearchUser,
  onDeactivateClick,
  onActivateClick,
  forgotPassword,
  changePassword,
};

export default userService;
