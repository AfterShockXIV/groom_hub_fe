import base from "./base.js";

export default {
  login(data) {
    return base
      .post("/auth/login", data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error during login:", error);
        throw error; // Rethrow the error to handle it in the calling function
      });
  },
};
