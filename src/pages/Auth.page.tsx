import { FC, memo } from "react"
import { Route, Switch } from "react-router-dom"
import AuthHero from "../components/AuthHero"
import LoginPage from "./Login.page"
import SignupPage from "./Signup.page"

interface Props {}

const Auth: FC<Props> = (props) => {
    return (
        <div className="flex justify-between box-border">
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route>
            </Switch>
            <AuthHero />
        </div>
    );
};

Auth.defaultProps = {};

export default memo(Auth);