import {useQuery} from '@tanstack/react-query';
import get495Products from '../api/get495products';

export default function use495Products() {
  const {data, isSuccess, isFetching} = useQuery({
    queryKey: ['495-products'],
    queryFn: get495Products,
    staleTime: Infinity,
  });

  const transformedProducts = [];
  if (isSuccess && data?.data?.products?.length > 0) {
    for (let i = 0; i < data?.data?.products?.length; i += 3) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(data?.data?.products?.[i + j]);
      }
      transformedProducts.push(row);
    }
  }

  return {products: transformedProducts, isSuccess, isFetching};
}
