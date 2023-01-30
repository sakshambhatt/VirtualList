import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import getMeeshoProducts from '../api/getMeeshoProducts';

export default function useMeeshoProducts() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const {data, isFetching, isError, refetch, isSuccess} = useQuery({
    queryKey: ['get-meesho-products'],
    queryFn: getMeeshoProducts,
    staleTime: Infinity,
    onError: (error: any) => console.log({error}),
  });

  let sectionWiseProducts = [] as Array<{
    id: string;
    title: string;
    iconName: string;
    data: Array<Product>;
  }>;

  const sectionIdToIndexMap = new Map<string, number>();

  if (isSuccess && data?.data?.sectionWiseProducts?.length > 0) {
    if (currentSection === null) {
      setCurrentSection(data?.data?.sectionWiseProducts?.[0]?.id);
    }
    sectionWiseProducts = [...data?.data?.sectionWiseProducts];
    data?.data?.sectionWiseProducts?.forEach(
      (section: Section, index: number) => {
        sectionIdToIndexMap.set(section.id, index);
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
    currentSection,
    setCurrentSection,
  };
}
