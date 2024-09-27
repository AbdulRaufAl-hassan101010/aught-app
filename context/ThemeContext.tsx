import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { Colors } from "@/constants/Colors";

const THEME_KEY = "user-theme";
type ThemeMode = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeMode | null;
  colors: typeof Colors.light | typeof Colors.dark;
  saveTheme: (selectedTheme: ThemeMode) => Promise<void>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem(THEME_KEY);

      if (storedTheme) {
        setTheme(storedTheme as ThemeMode);
      } else {
        setTheme(systemTheme as ThemeMode);
      }
    };

    loadTheme();
  }, [theme]);

  const saveTheme = async (selectedTheme: ThemeMode) => {
    setTheme(selectedTheme);
    await AsyncStorage.setItem(THEME_KEY, selectedTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: theme === "light" ? Colors.light : Colors.dark,
        saveTheme,
      }}
    >
      {children}
      <StatusBar
        style={theme === "light" ? "dark" : "light"}
        backgroundColor="#fff"
      
      />
    </ThemeContext.Provider>
  );
}
