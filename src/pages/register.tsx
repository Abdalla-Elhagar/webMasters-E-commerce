import image from "../images/signUpAndLogIn.png";
import google from "../images/Icon-Google.png";
import { Link } from "react-router-dom";


export default function Register() {


    
    return (
        <div className="register my-20 items-center flex justify-between">
            <img src={image} alt="registerImage" />
            <div className="content mx-auto w-[500px] max-px-36">
                <div className="container">
                    <div className="headerOfSignUp">
                        <h2 className="text-4xl mb-5">Create an account</h2>
                        <p>Enter your details below</p>
                    </div>
                    <form className="mt-14">
                        <input className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2" placeholder="Name" type="text" id="name" />
                        <input className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2" placeholder="phone" type="number" id="phone" />
                        <input className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2" placeholder="Password" type="password" id="password" />

                        <button className="bg-mainColor w-full py-4 text-white rounded-md mt-10">Create Account</button>
                    </form>
                        <button className="google w-full border-2 rounded-md flex gap-3 justify-center items-center py-4 mt-5">
                            <img className="size-5" src={google} alt="google-icon" />
                            <p>Sign up with Google</p>
                        </button>
                        <div className="bottom flex justify-center mt-10 text-black/60 gap-5">
                            <span>Already have account?</span> 
                            <Link className="border-b-2 border-black/25" to='/logIn'>Log in</Link>
                        </div>
                </div>

            </div>
        </div>
    )
}



  
  // ...
  

  
  // ...
  