import { FC, memo } from "react"

interface Props {}

const AuthHero: FC<Props> = (props) => {
    return (
        <div className="w-1/2 bg-black h-screen hidden lg:flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-authHeroImage bg-no-repeat bg-center bg-contain">
            </div>
        </div>
    );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);