/* eslint-disable no-restricted-imports */
import { gql, GraphQLClient } from 'graphql-request';
import {
  GetProductsQuery,
  SelectField,
  QueryproductsArgs,
  ProductLookupClient,
} from './types';

const buildFieldQuery = (fields: SelectField) => {
  const query = Object.keys(fields).reduce((acc, key) => {
    if (typeof fields[key] === 'object') {
      const nestedQuery = buildFieldQuery(fields[key] as SelectField);
      key = `${key} { ${nestedQuery} }`;
    }

    acc.push(key);
    return acc;
  }, [] as string[]);

  return query.join(' ');
};

export const productLookupClient = (url: string): ProductLookupClient => {
  const productLookupUrl = url ?? process.env.PRODUCT_LOOKUP_URL;
  const graphqlClient = new GraphQLClient(productLookupUrl);

  const getProducts = async (
    productArgs: QueryproductsArgs,
    select: SelectField,
  ): Promise<GetProductsQuery> => {
    const query = gql`
      query Products($skus: [String!]!, $countryCode: CountryCode) {
        products(skus: $skus, countryCode: $countryCode) {
          ${buildFieldQuery(select)}
        }
      }
    `;

    try {
      const result = await graphqlClient.request<
        GetProductsQuery,
        QueryproductsArgs
      >(query, productArgs);

      return result;
    } catch (err) {
      console.error('[PLClient::GetProducts]:', (err as Error).message);
      throw err;
    }
  };

  return { getProducts };
};
