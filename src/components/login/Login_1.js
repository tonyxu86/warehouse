import React, { Component } from 'react';
import '../../css/style.css';

class Login_1 extends Component {

    render() {
        return (
            <div class="login-05">
                <div class="fifth-login">
                    <h2>LOGIN FORM</h2>
                    <form class="five">
                        <li>
                            <input type="text" class="text" value="EMAIL" />
                            <label class =  " icon5 user2"></label>
                        </li>
                        <li class="blue">
                            <input type="password" value="PASSWORD" />
                            <label class =  " icon5 lock2"></label>
                        </li>
                        <div class="submit-five">
                            <input type="submit" onClick="myFunction()" value="LOG IN" />
                        </div>
                    </form>
                </div>
            </div>

    );
    }
}

export default Login_1;
