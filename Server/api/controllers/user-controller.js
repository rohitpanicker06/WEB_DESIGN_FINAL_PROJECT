const userService = require("../services/user-service");

const userController = {
  // login the user
  login(request, response) {
    userService.login(request.body, response);
  },

  // register new user
  signIn(request, response) {
    userService.AddUser(request.body, response);
  },

  getName(request, response) {
    userService.getName(request, response);
  },
};

module.exports = userController;
