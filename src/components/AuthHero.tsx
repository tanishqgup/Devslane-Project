import { FC, memo } from "react"

interface Props {}

const AuthHero: FC<Props> = (props) => {
    console.log("auth hero rendering");
    return (
        <div className="bg-black w-1/2 h-screen flex items-center justify-center">
            <h1 className="text-9xl text-red-600">Hero Section</h1>
        </div>
    );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);