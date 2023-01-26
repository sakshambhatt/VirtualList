import {useQuery} from '@tanstack/react-query';
import get495Products from '../api/get495products';

export default function use495Products() {
  const {data, isSuccess, isFetching} = useQuery({
    queryKey: ['495-products'],
    queryFn: get495Products,
    staleTime: Infinity,
  });

  const products = data?.data?.products as Array<Product>;

  return {products, isSuccess, isFetching};
}
