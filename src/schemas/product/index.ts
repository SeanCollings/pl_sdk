import { gql } from 'mercurius-codegen';

export const productSchema = gql`
  type PriceRange {
    minPrice: Float
    maxPrice: Float
    minFinalPrice: Float
    maxFinalPrice: Float
  }

  type Image {
    url: String
    main: Boolean
  }

  type Size {
    name: String
    system: String
    display: String
  }

  type Simple {
    sku: String
    price: Float
    finalPrice: Float
    status: String
    quantity: Int
    size: Size
    size_converted: Size
  }

  type Product {
    sku: String
    name: String
    brandName: String
    urlLink: String
    status: String
    categories: String
    categoryIds: [Int]
    isOnSale: Boolean
    gender: String
    price: Float
    finalPrice: Float
    priceRange: PriceRange
    images: [Image]
    simples: [Simple]
  }

  enum CountryCode {
    AU
    NZ
  }

  type Query {
    product(sku: String!, countryCode: CountryCode): Product
    products(skus: [String!]!, countryCode: CountryCode): [Product]
  }
`;
