import React from "react";
import ReactDOM from "react-dom";

export class Login extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div>
            <div className="Header">Login</div>

            <div className="Footer">
                <button type="submit"></button>
            </div>
        </div>
    }
}