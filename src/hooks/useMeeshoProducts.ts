import {useQuery} from '@tanstack/react-query';
import getMeeshoProducts from '../api/getMeeshoProducts';

export default function useMeeshoProducts() {
  const {data, isFetching, isError, refetch, isSuccess} = useQuery({
    queryKey: ['get-meesho-products'],
    queryFn: getMeeshoProducts,
    staleTime: Infinity,
    onError: (error: any) => console.log({error}),
  });

  const sectionWiseProducts = (data?.data?.sectionWiseProducts?.map(
    (section: Section) => ({
      ...section,
      data: [{key: section.id, list: section.data}],
    }),
  ) || []) as Array<{
    id: string;
    title: string;
    iconName: string;
    data: Array<{key: string; list: Product}>;
  }>;

  return {sectionWiseProducts, isFetching, isError, refetch, isSuccess};
}
