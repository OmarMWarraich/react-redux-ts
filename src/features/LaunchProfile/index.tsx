import { useLaunchProfileQuery } from "../../generated/graphql.tsx/graphql";
import LaunchProfile from "./LaunchProfile";

export default function LaunchProfileContainer() {
    const { data, error, loading } = useLaunchProfileQuery({
        variables: { id: '56' },
    });
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error || !data) {
        return <div>ERROR</div>;
    }
    
    return <LaunchProfile data={data} />;
    }


    