const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validateRegisterInput(data)
{
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // check on name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required.";
  }

  // check on email
  if (Validator.isEmpty(data.email)) {
    errors.name = "Email field is required.";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password =
      "Password should be between minimum 6 and 30 characters long only.";
  }
  // password2 check
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password field is required.";
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password and Password2 donot match.";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
