import { gql } from '@apollo/client';

export const LAUNCH_LIST_QUERY = gql`
    query LaunchListQuery {
        launches {
            mission_name
            launch_date_local
            launch_success
        }
    }
`;