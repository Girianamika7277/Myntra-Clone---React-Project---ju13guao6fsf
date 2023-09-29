import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "../../../FireBaseConfig";
import MyContext from "../../../context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedin, updateLoginStatus } = useContext(MyContext);

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    let loggedIn = await signInWithEmailAndPassword(email, password);
    // console.log(loggedIn.uid);
    if (loggedIn && loggedIn.uid) {
      updateLoginStatus(true);
      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log(isLoggedin);
      loggedIn = undefined;
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Invalid Credentials!", {
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
  };

  return (
    <>
      <div className="loginPage-wrapper"></div>
      <form className="loginPage-form" onSubmit={handleSignIn}>
        <h3>Login</h3>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="username"
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

        <button type="submit">LOGIN</button>
        <Link to={"/signup"} className="newUser">
          New User? Signup
        </Link>
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
