import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <input data-cy="login-email" />
        <input data-cy="login-password" />
        <button data-cy="login-submit" type="submit"></button>
      </form>
    </div>
  );
};

export default Login;
