import AsyncStorage from "@react-native-async-storage/async-storage";
import { Href, router, usePathname } from "expo-router";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

const URL = "https://aught.vercel.app/api/";

type GlobalProviderProp = {
  children: React.ReactNode;
};

export type GlobalContextType = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  signIn: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  user: User | null;
};

type User = {
  _id: string;
  createAt: Date;
  email: string;
  image: string;
  name: string;
  verified: boolean;
};

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }: GlobalProviderProp) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | User>(null);

  const pathname = usePathname();

  const signIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      // if field are empty
      if (!username || !password) {
        throw new Error("Please fill all fields");
      }

      const response = await fetch(URL + "businesses/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      //  save token in local storage
      const token = response.headers.get("set-cookie");
      const cookies = token?.split(";") || [];

      // save in local storage
      if (token) {
        await AsyncStorage.setItem(
          "token",
          cookies[0].replace("Authorization=", "")
        );
        await AsyncStorage.setItem(
          "expires",
          cookies[1]?.replace("expires=", "")
        );
      } else {
        throw new Error("Failed to retrieve token");
      }

      setLoggedIn(true);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", "An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // get logged in user data
        const response = await fetch(URL + "me");
        const data = (await response.json()) as unknown as User;

        // set states
        setUser((state) => ({ ...state, ...data }));
        setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);

        const onboarding = await AsyncStorage.getItem("onboarding");

        if (onboarding) {
          router.replace("" as Href);
        } else {
          router.replace("sign-in" as Href);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (!loading && loggedIn) {
      if (
        pathname === "sign-in" ||
        pathname === "sign-up" ||
        pathname === "/"
      ) {
        router.replace("home" as Href);
      }
    }
  }, [pathname, loading, loggedIn]);

  return (
    <GlobalContext.Provider
      value={
        {
          loggedIn,
          setLoggedIn,
          loading,
          signIn,
          user,
        } as GlobalContextType
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};
