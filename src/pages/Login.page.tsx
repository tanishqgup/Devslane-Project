import { FC, memo } from "react"
import { Link } from "react-router-dom";

interface Props {}

const Login: FC<Props> = (props) => {
    console.log("login page rendering");
    return (
        <div>
            this is login page
            <Link to="/signup">Sign Up</Link>
        </div>
    );
};

Login.defaultProps = {};

export default memo(Login);