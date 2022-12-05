import type { GraphQLResolveInfo } from 'graphql';
import type { MercuriusContext } from 'mercurius';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) =>
  | Promise<import('mercurius-codegen').DeepPartial<TResult>>
  | import('mercurius-codegen').DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type PriceRange = {
  __typename?: 'PriceRange';
  minPrice?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  minFinalPrice?: Maybe<Scalars['Float']>;
  maxFinalPrice?: Maybe<Scalars['Float']>;
};

export type Image = {
  __typename?: 'Image';
  url?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['Boolean']>;
};

export type Size = {
  __typename?: 'Size';
  name?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
};

export type Simple = {
  __typename?: 'Simple';
  sku?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  finalPrice?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  size?: Maybe<Size>;
  size_converted?: Maybe<Size>;
};

export type Product = {
  __typename?: 'Product';
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  urlLink?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  categoryIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  isOnSale?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  finalPrice?: Maybe<Scalars['Float']>;
  priceRange?: Maybe<PriceRange>;
  images?: Maybe<Array<Maybe<Image>>>;
  simples?: Maybe<Array<Maybe<Simple>>>;
};

export enum CountryCode {
  AU = 'AU',
  NZ = 'NZ',
}

export type Query = {
  __typename?: 'Query';
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type QueryproductArgs = {
  sku: Scalars['String'];
  countryCode?: InputMaybe<CountryCode>;
};

export type QueryproductsArgs = {
  skus: Array<Scalars['String']>;
  countryCode?: InputMaybe<CountryCode>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  PriceRange: ResolverTypeWrapper<PriceRange>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Image: ResolverTypeWrapper<Image>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Size: ResolverTypeWrapper<Size>;
  Simple: ResolverTypeWrapper<Simple>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Product: ResolverTypeWrapper<Product>;
  CountryCode: CountryCode;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  PriceRange: PriceRange;
  Float: Scalars['Float'];
  Image: Image;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Size: Size;
  Simple: Simple;
  Int: Scalars['Int'];
  Product: Product;
  Query: {};
};

export type PriceRangeResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['PriceRange'] = ResolversParentTypes['PriceRange'],
> = {
  minPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minFinalPrice?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  maxFinalPrice?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image'],
> = {
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  main?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SizeResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Size'] = ResolversParentTypes['Size'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimpleResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Simple'] = ResolversParentTypes['Simple'],
> = {
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  finalPrice?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Size']>, ParentType, ContextType>;
  size_converted?: Resolver<
    Maybe<ResolversTypes['Size']>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product'],
> = {
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  urlLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  categoryIds?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Int']>>>,
    ParentType,
    ContextType
  >;
  isOnSale?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  finalPrice?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  priceRange?: Resolver<
    Maybe<ResolversTypes['PriceRange']>,
    ParentType,
    ContextType
  >;
  images?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Image']>>>,
    ParentType,
    ContextType
  >;
  simples?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Simple']>>>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  product?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryproductArgs, 'sku'>
  >;
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Product']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryproductsArgs, 'skus'>
  >;
};

export type Resolvers<ContextType = MercuriusContext> = {
  PriceRange?: PriceRangeResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Size?: SizeResolvers<ContextType>;
  Simple?: SimpleResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import('fastify').FastifyReply;
  },
) => Promise<Array<import('mercurius-codegen').DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import('mercurius').MercuriusContext & {
    reply: import('fastify').FastifyReply;
  },
> {
  PriceRange?: {
    minPrice?: LoaderResolver<
      Maybe<Scalars['Float']>,
      PriceRange,
      {},
      TContext
    >;
    maxPrice?: LoaderResolver<
      Maybe<Scalars['Float']>,
      PriceRange,
      {},
      TContext
    >;
    minFinalPrice?: LoaderResolver<
      Maybe<Scalars['Float']>,
      PriceRange,
      {},
      TContext
    >;
    maxFinalPrice?: LoaderResolver<
      Maybe<Scalars['Float']>,
      PriceRange,
      {},
      TContext
    >;
  };

  Image?: {
    url?: LoaderResolver<Maybe<Scalars['String']>, Image, {}, TContext>;
    main?: LoaderResolver<Maybe<Scalars['Boolean']>, Image, {}, TContext>;
  };

  Size?: {
    name?: LoaderResolver<Maybe<Scalars['String']>, Size, {}, TContext>;
    system?: LoaderResolver<Maybe<Scalars['String']>, Size, {}, TContext>;
    display?: LoaderResolver<Maybe<Scalars['String']>, Size, {}, TContext>;
  };

  Simple?: {
    sku?: LoaderResolver<Maybe<Scalars['String']>, Simple, {}, TContext>;
    price?: LoaderResolver<Maybe<Scalars['Float']>, Simple, {}, TContext>;
    finalPrice?: LoaderResolver<Maybe<Scalars['Float']>, Simple, {}, TContext>;
    status?: LoaderResolver<Maybe<Scalars['String']>, Simple, {}, TContext>;
    quantity?: LoaderResolver<Maybe<Scalars['Int']>, Simple, {}, TContext>;
    size?: LoaderResolver<Maybe<Size>, Simple, {}, TContext>;
    size_converted?: LoaderResolver<Maybe<Size>, Simple, {}, TContext>;
  };

  Product?: {
    sku?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>;
    name?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>;
    brandName?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>;
    urlLink?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>;
    status?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>;
    categories?: LoaderResolver<
      Maybe<Scalars['String']>,
      Product,
      {},
      TContext
    >;
    categoryIds?: LoaderResolver<
      Maybe<Array<Maybe<Scalars['Int']>>>,
      Product,
      {},
      TContext
    >;
    isOnSale?: LoaderResolver<Maybe<Scalars['Boolean']>, Product, {}, TContext>;
    gender?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>;
    price?: LoaderResolver<Maybe<Scalars['Float']>, Product, {}, TContext>;
    finalPrice?: LoaderResolver<Maybe<Scalars['Float']>, Product, {}, TContext>;
    priceRange?: LoaderResolver<Maybe<PriceRange>, Product, {}, TContext>;
    images?: LoaderResolver<Maybe<Array<Maybe<Image>>>, Product, {}, TContext>;
    simples?: LoaderResolver<
      Maybe<Array<Maybe<Simple>>>,
      Product,
      {},
      TContext
    >;
  };
}
declare module 'mercurius' {
  interface IResolvers
    extends Resolvers<import('mercurius').MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
