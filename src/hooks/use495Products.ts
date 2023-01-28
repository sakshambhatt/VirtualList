import {useQuery} from '@tanstack/react-query';
import get495Products from '../api/get495products';

export default function use495Products() {
  const {data, isSuccess, isFetching, isError, refetch} = useQuery({
    queryKey: ['495-products'],
    queryFn: get495Products,
    staleTime: Infinity,
    onError: error => console.log({error}),
  });

  const products = data?.data?.products as Array<Product>;

  return {products, isSuccess, isFetching, isError, refetch};
}
