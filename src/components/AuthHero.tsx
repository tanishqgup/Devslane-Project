import { FC, memo } from "react"

interface Props {}

const AuthHero: FC<Props> = (props) => {
    console.log("auth hero rendering");
    return (
        <div>
            This is authHero
        </div>
    );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);