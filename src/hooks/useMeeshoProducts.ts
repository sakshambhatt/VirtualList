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

  const categories = [] as Array<{id: string; title: string; iconName: string}>;

  const sectionWiseProducts = [] as Array<string | Product>;

  const sectionIdToIndexMap = new Map<string, number>();

  if (isSuccess && data?.data?.sectionWiseProducts?.length > 0) {
    if (currentSection === null) {
      setCurrentSection(data?.data?.sectionWiseProducts?.[0]?.id);
    }
    data?.data?.sectionWiseProducts?.forEach((section: Section) => {
      categories.push({
        id: section.id,
        title: section.title,
        iconName: section.iconName,
      });
      sectionIdToIndexMap.set(section.id, sectionWiseProducts.length);
      sectionWiseProducts.push(section.title, ...section.data);
    });
  }

  return {
    categories,
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
