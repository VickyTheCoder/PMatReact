import React from "react";
import ReactDOM from "react-dom";

export default class Login extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
        <div>
            <table>
                <caption>Login Page</caption>
                <tr>
                    <td><label>UserId</label></td>
                    <td><input name="username"></input></td>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input name="password" type="password"></input></td>
                </tr>
                <tr>
                    <td><button name="login">Login</button></td>
                    <td><button name="Signup">Sign Up</button></td>
                </tr>
                <tr>
                    <td><button name="forgot_credentials">Forgot Credentials</button></td>
                </tr>
            </table>
        </div>
        );
    }
}