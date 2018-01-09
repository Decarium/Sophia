import React from "react";

import styles from "./Login.css";

import DecariumLongLogo from "../../Components/DecariumLongLogo";
import Input from "../../Components/Input";

class Login extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <DecariumLongLogo />
        </div>
        <form className={styles.loginForm}>
          <Input placeholder="Email" required />
          <br />
          <Input
            type="password"
            placeholder="&#9679; &#9679; &#9679; &#9679; &#9679;"
            required
          />
        </form>
      </div>
    );
  }
}

export default Login;
