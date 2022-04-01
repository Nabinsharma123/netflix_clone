import React from "react";
import "./login.css"
function login() {
    return (
        <div className="login_container"  >
            <div className="popup_login" >
                <div className="popup_inner_login" >
                    <div className="sigh_in" >
                        <h1>Sigh In</h1>

                    </div>

                    <form action="/Home" >

                        <input className="input" id="Email" type="email" placeholder="Email" required />

                        <input className="input" type="password" placeholder="Password" required />
                        <button type="submit" >Sigh in</button>

                    </form>

                    <div className="remember" >
                        <label> <input type="checkbox" ></input> Remember me </label>
                        <h1 >Need help?</h1>
                    </div>
                    <div className="Sigh_Up_now" >
                        <h1>New to Netflix? <a href="/" >Sigh Up now</a> </h1>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default login;