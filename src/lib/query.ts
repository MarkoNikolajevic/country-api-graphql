import { gql } from '@apollo/client';

const COUNTRY_FRAGMENT = gql`
  fragment CountryFields on CountryNode {
    name
    population
    flag
    capital
    region
  }
`

export const GET_COUNTRIES = gql`
query Countries {
  countries {
    edges {
      node {
        id
        ...CountryFields
      }
    }
  }
}
${COUNTRY_FRAGMENT}
`;

export const GET_COUNTRY = gql`
query Country($name: String!) {
  countries(name: $name) {
    edges {
      node {
        ...CountryFields
        nativeName
        subregion
        topLevelDomain
        borders
        currencies{
          edges{
            node{
              name
              code
              symbol
            }
          }
        }
        languages{
          edges{
            node{
              name
              nativeName
              iso6391
              iso6392
            }
          }
        }
      }
    }
  }
}
${COUNTRY_FRAGMENT}
`;
