import axios from "axios";
const token = localStorage.getItem("accessToken");
let result;

const createHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  console.log(token);
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  console.log(headers);
  return headers;
};

const create = async (endpoint, payload) => {
  await axios
    .post(`http://localhost:4500/api/${endpoint}`, payload, {
      headers: createHeaders(),
    })
    .then((response) => {
      result = { status: "SUCCESS", data: response.data };
    })
    .catch((error) => {
      result = { status: "ERROR", data: error };
    });

  return result;
};

const read = (endpoint) => {
  axios
    .get(`http://localhost:4500/api/${endpoint}`, {
      headers: createHeaders(),
    })
    .then((response) => {
      result = { status: "SUCCESS", data: response.data };
    })
    .catch((error) => {
      result = { status: "ERROR", data: error };
    });

  return result;
};

const update = (endpoint, payload) => {
  axios
    .put(`http://localhost:4500/api/${endpoint}/${id}`, payload, {
      headers: createHeaders(),
    })
    .then((response) => {
      result = { status: "SUCCESS", data: response.data };
    })
    .catch((error) => {
      result = { status: "ERROR", data: error };
    });

  return result;
};

const deleteData = (endpoint) => {
  axios
    .delete(`http://localhost:4500/api/${endpoint}/${id}`, {
      headers: createHeaders(),
    })
    .then(() => {
      result = { status: "SUCCESS", data: response.data };
    })
    .catch((error) => {
      result = { status: "ERROR", data: error };
    });

  return result;
};

export { create, read, update, deleteData };
