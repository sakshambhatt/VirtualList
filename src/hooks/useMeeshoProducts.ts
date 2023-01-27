import {useQuery} from '@tanstack/react-query';
import getMeeshoProducts from '../api/getMeeshoProducts';

export default function useMeeshoProducts() {
  const {data, isFetching, isError} = useQuery(
    ['get-meesho-products'],
    getMeeshoProducts,
  );

  const sectionWiseProducts = data?.data?.sectionWiseProducts || [];

  return {sectionWiseProducts, isFetching, isError};
}
