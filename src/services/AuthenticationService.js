import api from "../config/Api";

export const logout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

export const login = (email, password) => {
  let promise = api.post("/login", { email, password });

  promise.then(response => {
    localStorage.setItem("token", response.headers["authorization"]);
  });

  promise.catch(error => {
    console.log(error);
});

  return promise;
};
