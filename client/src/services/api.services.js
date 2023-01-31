import server from "../interceptors/axios.interceptor";

export class ApiService {
  controller;
  constructor(controller) {
    this.controller = controller + "/";
  }
  getAll(method = "GetAll", headers) {
    return new Promise((resolve, reject) => {
      server
        .get(this.controller + `${method}`, {
          headers,
        })
        .then((response) => {
          if (response.status === 204) {
            // Not found
            resolve([]);
          } else {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  get(method, id = "", headers) {
    if (id) {
      method += "/" + id;
    }
    return new Promise((resolve, reject) => {
      server
        .get(this.controller + method, {
          headers,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  post(data, method = "Create", headers) {
    return new Promise((resolve, reject) => {
      server
        .post(this.controller + `${method}`, data, {
          headers,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  download(data, method = "Download", headers) {
    return new Promise((resolve, reject) => {
      server
        .post(this.controller + `${method}`, data, {
          responseType: "blob",
          headers,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  upload(fileData, method = "Upload") {
    return new Promise((resolve, reject) => {
      server
        .post(this.controller + `${method}`, fileData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  put(id, data, method = "Update", headers) {
    return new Promise((resolve, reject) => {
      server
        .put(this.controller + `${method}/${id}`, data, {
          headers,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  delete(id, method = "Delete", headers) {
    if (id) {
      method += "/" + id;
    }
    return new Promise((resolve, reject) => {
      server
        .delete(this.controller + `${method}`, {
          headers,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
