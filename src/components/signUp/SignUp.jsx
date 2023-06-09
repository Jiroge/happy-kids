import { ImCross } from "react-icons/im";
// import { AiFillFacebook, AiFillGooglePlusSquare } from "react-icons/ai";

import "./SignUp.scss"
// import Login from "../logIn/LogIn";

function SignUp(props) {
    // const iconStyle = {
    //     fill: "#FFFFFF",
    //     position: "absolute",
    //     width: "25px",
    //     height: "auto",
    //     left: "5%",
    // }

    // const textStyle = {
    //     display: "inline-block",
    //     position: "relative",
    //     top: "-0.5em",
    //     padding: "0 0.5em",
    //     background: "#fff",
    //     color: "#28282873"
    // };
    const inputStyle = {
        height: "40px",
        width: "350px",
        paddingLeft: "20px",
        // border: focus ? "2px soli
    }
    const handleClick = () => {
        props.closeSigUp(false);
    }

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "white",
            zIndex: 99,
            textAlign: "center",
            margin: "auto auto",
        }}>
            <ImCross onClick={handleClick} style={{
                position: "fixed",
                top: 100,
                right: 100,
                cursor: "pointer"
            }} />

            <div className="sign-Up">
                <h1>
                    Sign Up
                </h1>
                <p>Already a member?<span style={{ color: "#d2461c" }}>Log In</span></p>
                <form>
                    <input
                        type="text"
                        //  onChange={}
                        // onClick={() => setFocus(true)}
                        placeholder="Enter your fullname here*"
                        style={inputStyle}
                        required
                    />
                    <input
                        type="email"
                        //  onChange={}
                        // onClick={() => setFocus(true)}
                        placeholder="Enter your email here*"
                        style={inputStyle}
                        required
                    />
                    <input
                        type="password"
                        //  onChange={}
                        // onClick={() => setFocus(true)}
                        placeholder="Enter your password here*"
                        style={inputStyle}
                        required
                    />
                    <button type="submit">Subscribe Now</button>
                </form>
            </div>

            {/* <button className="facebook"><AiFillFacebook style={iconStyle} />Sign up with Facebook</button> */}
            {/* <button className="google"><AiFillGooglePlusSquare style={iconStyle} />Sign up with Google</button> */}
            {/* <div style={{ marginTop: "330px" }}>
                <hr className="hr" />
                <div style={{ textAlign: "center" }}>
                    <span style={textStyle}>or</span>
                </div>
            </div>
            <button className="email">Sign up with email</button> */}

        </div>


    )
}
export default SignUp;