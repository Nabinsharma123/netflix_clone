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
                        <a href="/" >Need help?</a>
                    </div>
                </div>

            </div>

            {/* <img className="background_image" src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/2341e349-a6fc-4b04-a0ad-9b21defa1f88/IN-en-20220307-popsignuptwoweeks-perspective_alpha_website_small.jpg" /> */}

        </div>
    )
}

export default login;