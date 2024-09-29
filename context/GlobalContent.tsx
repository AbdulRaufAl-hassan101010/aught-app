import { ApiRequest } from "@/libs/backend";
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
  signOut: () => void;
  statistics: Statistics | null;
  fetchStatistics: () => void;
  onboarded: boolean | null;
  signUp: ({
    businessName,
    email,
    password,
    confirmPassword,
  }: {
    businessName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
};

export type User = {
  _id: string;
  createAt: Date;
  email: string;
  image: string;
  name: string;
  verified: boolean;
};

export type Statistics = {
  counts: {
    countProducts: number;
    countBranches?: number;
    countCategories: number;
  };
};

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }: GlobalProviderProp) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | User>(null);
  const [statistics, setStatistics] = useState<null | Statistics>(null);
  const [onboarded, setOnboarded] = useState<null | boolean>(null);

  const pathname = usePathname();

  const fetchUser = async () => {
    const onboarding = await AsyncStorage.getItem("onboarding");
    try {
      // get logged in user data
      const response = await fetch(URL + "me");
      const data = (await response.json()) as unknown as User;

      if (!response.ok) throw new Error("Failed to fetch user data");

      // set states
      setUser((state) => ({ ...state, ...data }));
      setLoggedIn(true);
    } catch (error) {
      setLoggedIn(false);
      setUser(null);

      if (onboarding) {
        router.replace("(auth)" as Href);
      }
    } finally {
      setLoading(false);
    }
  };

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

      await fetchUser();

      router.replace("home" as Href);
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

  const signOut = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) throw new Error("No token found");

      const response = await fetch(URL + "logout", {
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) throw new Error("Failed to logout");

      // remove token from local storage
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("expires");

      setLoggedIn(false);
      setUser(null);

      router.replace("(auth)" as Href);
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

  const signUp = async ({
    businessName,
    email,
    password,
    confirmPassword,
  }: {
    businessName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    try {
      // if any of the fields are empty
      if (!businessName || !email || !password || !confirmPassword) {
        throw new Error("All fields are required");
      }

      // if password and confirm password do not match
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // if email is not valid
      if (!email.includes("@")) {
        throw new Error("Invalid email");
      }

      // if password is less than 8 characters
      if (password.length < 8) {
        throw new Error("Password must be at least 8 characters");
      }

      const response = await ApiRequest(
        "businesses",
        "POST",
        {
          "Content-Type": "application/json",
        },
        {
          name: businessName,
          email,
          password,
        }
      );

      Alert.alert("Success", "Account created successfully");

      await signIn({ username: email, password });
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

  const fetchStatistics = async () => {
    try {
      const response = await fetch(URL + "statistics");

      if (!response.ok) throw new Error("Failed to fetch statistics");

      const data = (await response.json()) as unknown as Statistics;

      setStatistics((state) => ({ ...state, ...data }));
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", "An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (!loading && loggedIn) {
      // if user is not  verified, redirect to verify account page
      if (user && !user.verified) {
        router.replace("verify-account" as Href);
      }

      // redirect to home page if user is logged in
      if (
        pathname === "sign-in" ||
        pathname === "sign-up" ||
        pathname === "/" ||
        pathname === "verify-account"
      ) {
        router.replace("home" as Href);
      }
    }
  }, [pathname, loading, loggedIn]);

  // useEffect(() => {
  //   checkOnboarding();
  // }, [pathname, loading, loggedIn]);

  return (
    <GlobalContext.Provider
      value={
        {
          loggedIn,
          setLoggedIn,
          loading,
          signIn,
          user,
          signOut,
          statistics,
          fetchStatistics,
          onboarded,
          signUp,
        } as GlobalContextType
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};
