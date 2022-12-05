/* eslint-disable no-restricted-imports */
import { Product, Query, QueryproductsArgs } from '../../src/graphql/generated';
export { QueryproductsArgs } from '../../src/graphql/generated';

type Primitive = string | number | boolean;

type RequireOne<T> = T & { [P in keyof T]: Required<Pick<T, P>> }[keyof T];

type SetField<V, O> = O extends Primitive
  ? V
  : O extends (infer U)[]
  ? SetField<V, U>
  : RequireOne<{ [K in keyof O]: SetField<V, O[K]> }>;

export type SelectField = SetField<true, RequireOne<Product>>;

export type GetProductsQuery = Pick<Query, 'products'>;

export type ProductLookupClient = {
  getProducts: (
    productArgs: QueryproductsArgs,
    select: SelectField,
  ) => Promise<GetProductsQuery>;
};
