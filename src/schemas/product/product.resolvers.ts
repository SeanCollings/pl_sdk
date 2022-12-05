import { Product } from '@/graphql/generated';
import { IResolvers } from 'mercurius';

const mockProduct: Product = {
  sku: 'mock_sku',
  name: 'mock_name',
  brandName: 'mock_brandName',
  price: 10,
  finalPrice: 10,
  priceRange: {
    minPrice: 10,
    maxPrice: 20,
    minFinalPrice: 10,
    maxFinalPrice: 20,
  },
  isOnSale: true,
  images: [{ url: 'https://mock_url.com/1234', main: true }],
  categoryIds: [1, 5, 7],
  gender: 'male',
  status: 'active',
  urlLink: 'https://mock_urlLink.com/1234',
  simples: [{ sku: 'mock_simple_sku' }],
};

const getProduct = async (): Promise<Product> => {
  return mockProduct;
};

const getProducts = async (): Promise<Product[]> => {
  return [mockProduct];
};

export const productResolvers: IResolvers = {
  Query: {
    product: getProduct,
    products: getProducts,
  },
};
