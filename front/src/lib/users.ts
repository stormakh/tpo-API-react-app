import { UserSession, UserType } from "@/models/users";
import { NavigateFunction } from "react-router-dom";

const url = "http://localhost:8080/user";

export async function checkCorrectPath(
  userType: UserType | null,
  allowedUserTypes: UserType[],
  navigate: NavigateFunction
) {
  if (!userType || !allowedUserTypes.includes(userType)) {
    navigate("/");
  }
}

export async function fetchAllUsers(userId: number) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export async function createUser(user: UserSession) {
  try {
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export async function fetchUserById(userId: number) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export async function getUserSession(token: string): Promise<UserSession> {
  try {
    const response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data as UserSession;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}
