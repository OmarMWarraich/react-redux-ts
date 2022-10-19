import { gql } from '@apollo/client';

export const LAUNCH_LIST = gql`
    query LaunchList {
        launches {
            mission_name
            launch_date_local
            launch_success
        }
    }
`;