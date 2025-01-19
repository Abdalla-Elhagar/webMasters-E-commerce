import image from "../images/signUpAndLogIn.png";

export default function LogIn() {
    
    return (
        <div className="register my-20 items-center flex w-full justify-between">
            <img className="w-4/6 max-lg:hidden" src={image} alt="registerImage" />
            <div className="content mx-auto max-w-[500px] max-px-36">
                <div className="container">
                    <div className="headerOfSignUp">
                    <h2 className="text-4xl font-semibold mb-5">Create an account</h2>
                    <p>Enter your details below</p>
                    </div>
                    <form className="mt-14">
                        <input className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2" placeholder="phone" type="number" id="phone" />
                        <input className="w-full outline-none py-3 text-black/50 focus:placeholder:text-black/60 focus:border-black/40 border-b-2" placeholder="Password" type="password" id="password" />
                        <div className="buttons flex justify-between mt-10 items-center">
                            <button className="bg-mainColor px-10 py-4 text-white rounded-md ">Log In</button>
                            <button className="text-mainColor">Forget Password?</button>
                        </div>
                        
                    </form>
                        
                        
                </div>

            </div>
        </div>
    )
}



  
  // ...
  

  
  // ...
  