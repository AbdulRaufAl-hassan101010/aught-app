type CustomProps = {
  children?: React.ReactNode;
  lightClassName?: string;
  darkClassName?: string;
  globalClassName?: React.ComponentProps<typeof View>["className"];
};

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  image: string;
  description: string;
};