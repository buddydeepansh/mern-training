const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // check on email
  if (Validator.isEmpty(data.email)) {
    errors.name = "Email field is required.";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
