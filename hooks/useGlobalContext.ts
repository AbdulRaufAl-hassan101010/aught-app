import { GlobalContext, GlobalContextType } from "@/context/GlobalContent";
import { useContext } from "react";

export const useGlobalContext = () => {
  return useContext(GlobalContext) as GlobalContextType;
};
