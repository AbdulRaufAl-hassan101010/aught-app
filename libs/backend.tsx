import { API_URL } from "@/constants";
import { Alert } from "react-native";

export const ApiRequest = async (
  path: string = "",
  method: "GET" | "POST" | "PATCH" | "DELETE" = "GET",
  headers?: any,
  body?: any
) => {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      method,
      headers,
      body:
        method === "POST" || method === "PATCH"
          ? JSON.stringify(body)
          : undefined,
    });


    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      Alert.alert("Error", "An unknown error occurred");
    }
  }
};
