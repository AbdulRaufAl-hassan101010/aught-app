type CustomProps = {
  children: React.ReactNode;
  lightClassName?: string;
  darkClassName?: string;
  globalClassName?: React.ComponentProps<typeof View>["className"];
};
