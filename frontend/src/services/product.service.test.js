import axios from 'axios';
import { getProducts } from './product.service';
import mockProducts from '../mocks/mockProducts';

jest.mock('axios');

describe('productService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return products when the request succeeds', async () => {
    const products = mockProducts;
    axios.get.mockResolvedValue({ data: products });

    const result = await getProducts();

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
    expect(result).toEqual(products);
  });

  test('should throw an error when the request fails', async () => {
    const error = new Error('Network error');
    axios.get.mockRejectedValue(error);

    await expect(getProducts()).rejects.toThrow('Network error');
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
  });
});
