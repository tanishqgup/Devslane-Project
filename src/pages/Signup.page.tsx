import { FC, memo } from "react"
import { Link } from "react-router-dom";

interface Props {}

const Signup: FC<Props> = (props) => {
    console.log("sign up page rendering");
    return (
        <div>
            this is signup page
            <Link to="/login">login In</Link>
        </div>
    );
};

Signup.defaultProps = {};

export default memo(Signup);