type Product = {
  id: string;
  name: string;
  imageUrl: string;
  categoryId: string;
};

type Section = {
  id: string;
  title: string;
  iconName: string;
  data: Array<Product>;
};
