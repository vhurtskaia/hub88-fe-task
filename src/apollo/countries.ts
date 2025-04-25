import { gql } from '@apollo/client';

export const COUNTRIES_LIST = gql`
    query Countries($code: String) {
        countries(filter: { code: { regex: $code } }) {
            code
            name
        }
    }
`;