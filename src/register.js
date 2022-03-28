import React from "react";
import "./register.css"
function register() {
    return (
        <div className="login_container"  >
            <div className="popup_login" >
                <div className="popup_inner_register" >
                    <div className="sigh_in_register" >
                        <h1>Unlimited movies, TV shows and more.</h1>
                    </div>
                    <h1 className="dis_1" >Watch anywhere. Cancel anytime.</h1>
                    <h1 className="dis_2"  >Ready to watch? Enter your email to create or restart your membership.</h1>

                    <form action="/Home" >
                        <input className="input_register" id="Email" type="email" placeholder="   Email" required />

                        <button type="submit" >Get Started</button>

                    </form>


                </div>

            </div>



        </div>
    )
}

export default register;