import { FC, memo } from "react"

interface Props {}

const Dashboard: FC<Props> = (props) => {
    return (
        <div>
            this is dashoboard page
        </div>
    );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);