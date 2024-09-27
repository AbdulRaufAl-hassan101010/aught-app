import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import { useContext } from "react";

export const useThemeColor = () => {
  return useContext(ThemeContext);
};
