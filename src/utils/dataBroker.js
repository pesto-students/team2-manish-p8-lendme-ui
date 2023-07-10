import axios from "axios";

let result;
const create = (endpoint, dataToSend) => {

    axios
      .post(`http://localhost:8080/api/${endpoint}`, {
        title: "",
        body: dataToSend
      })
      .then((response) => {
        console.log(response.data);
        result = {status: "SUCCESS", data: response.data}
      })
      .catch((error) => {
        console.log("error", error);
        result = {status: "ERROR", data: error}

      });

    return result;
}


const read = (endpoint) => {

    axios
      .get(`http://localhost:8080/api/${endpoint}`, {
      })
      .then((response) => {
        console.log(response.data);
        result = {status: "SUCCESS", data: response.data}
      })
      .catch((error) => {
        console.log("error", error);
        result = {status: "ERROR", data: error}
      });

    return result;
}

const update = (endpoint, payload) => {

    axios
      .put(`http://localhost:8080/api/${endpoint}/${id}`, {
        title: "",
        body: payload
      })
      .then((response) => {
        console.log(response.data);
        result = {status: "SUCCESS", data: response.data}
      })
      .catch((error) => {
        console.log("error", error);
        result = {status: "ERROR", data: error}
      });

    return result;
}

const deleteData = (endpoint, dataToSend) => {

    axios
      .delete(`http://localhost:8080/api/${endpoint}/${id}`)
      .then(() => {
        console.log(response.data);
        result = {status: "SUCCESS", data: response.data}
      })
      .catch((error) => {
        console.log("error", error);
        result = {status: "ERROR", data: error}
      });

    return result;
}

export{
    create,
    read,
    update,
    deleteData
}
