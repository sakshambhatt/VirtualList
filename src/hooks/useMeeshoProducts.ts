import {useQuery} from '@tanstack/react-query';
import getMeeshoProducts from '../api/getMeeshoProducts';

export default function useMeeshoProducts() {
  const {data, isFetching, isError, refetch, isSuccess} = useQuery({
    queryKey: ['get-meesho-products'],
    queryFn: getMeeshoProducts,
    staleTime: Infinity,
    onError: (error: any) => console.log({error}),
  });

  const sectionWiseProducts = [] as Array<{
    id: string;
    title: string;
    iconName: string;
    data: Array<{key: string; list: Array<Product>}>;
  }>;

  const sectionIdToIndexMap = new Map<string, number>();

  if (isSuccess && data?.data?.sectionWiseProducts?.length > 0) {
    data?.data?.sectionWiseProducts?.forEach(
      (section: Section, index: number) => {
        sectionIdToIndexMap.set(section.id, index);
        sectionWiseProducts.push({
          ...section,
          data: [{key: section.id, list: section.data}],
        });
      },
    );
  }

  return {
    sectionWiseProducts,
    isFetching,
    isError,
    refetch,
    isSuccess,
    sectionIdToIndexMap,
  };
}
