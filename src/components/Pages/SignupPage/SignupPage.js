import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";
import { registerWithEmailAndPassword } from "../../../FireBaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    let signUp = null;
    try {
      signUp = await registerWithEmailAndPassword(displayName, email, password);
      if (signUp && signUp.uid) {
        // console.log("Registration successful!");
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // signUp=undefined;
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        // console.log("Registration failed!");
        toast.error("Registration failed!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="signupPage-wrapper"></div>
      <form className="signupPage-form" onSubmit={handleRegister}>
        <h3>Signup</h3>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          id="fullname"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          // ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">SIGNUP</button>
        <Link to={"/login"} className="newUser">
          Already a User? Login
        </Link>
      </form>
      <ToastContainer />
    </>
  );
};

export default SignupPage;
