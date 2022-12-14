import { useLaunchListQuery } from "../../generated/graphql.tsx/graphql";
import LaunchList from "./LaunchList";

const LaunchListContainer = () => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <LaunchList data={data} />;
};

export default LaunchListContainer;