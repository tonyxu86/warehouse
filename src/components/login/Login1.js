import React, {Component} from 'react';
import '../../css/style.css';

class Login1 extends Component {

  render() {
    return (
      <div className="login-05">
        <div className="fifth-login">
          <h2>LOGIN FORM</h2>
          <form className="five">
            <li>
              <input type="text" className="text" value="EMAIL"/>
              <label className="icon5 user2"/>
            </li>
            <li className="blue">
              <input type="password" value="PASSWORD"/>
              <label className="icon5 lock2"/>
            </li>
            <div className="submit-five">
              <input type="submit" onClick="myFunction()" value="LOG IN"/>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default Login1;
