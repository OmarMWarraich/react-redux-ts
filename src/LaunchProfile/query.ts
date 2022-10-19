import { gql } from '@apollo/client';

export const QUERY_LAUNCH_PROFILE = gql`
    query LaunchProfile($id: String!) {
        launch(id: $id) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            details
            launch_site {
                site_name_long
            }
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
            links {
                mission_patch_small
                flickr_images
            }
        }
    }
`;
