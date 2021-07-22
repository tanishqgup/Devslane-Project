import { FC, memo } from "react"

interface Props {}

const Recordings: FC<Props> = (props) => {
    return (
        <div>
            this is Recordings page
        </div>
    );
};

Recordings.defaultProps = {};

export default memo(Recordings);