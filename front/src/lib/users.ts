import usersMock from "@/mock/usersMock.json";
import { UserSession, UserType } from "@/models/users";
import { NavigateFunction } from "react-router-dom";


export async function checkCorrectPath(userType : UserType | null , expected: UserType, navigate : NavigateFunction){
  if(!userType){
    // Redirect to the correct route
    navigate('/');
  }else if(userType !== expected){
    // Redirect to the correct route
    navigate(`/${userType}`)
  }
}

export async function createUser(user: UserSession): Promise<UserSession> {
  return new Promise((resolve) => {
    // Create a new user with the given data
    const newUser = {
      ...user,
      id: usersMock.length + 1,
      type: user.type as UserType,
    };

    // Add the new user to the mock
    usersMock.push(newUser);

    // Resolve the new user
    resolve(newUser);
  });
}

export function fetchUserById(id: number): UserSession | null {
  const users: UserSession[] = usersMock.map((user) => ({
    ...user,
    type: user.type as UserType,
  }));

  // Find the user with the given ID
  const user = users.find((user) => user.id === id);

  // Return the user or null if not found
  return user || null;
}

export const fetchUserByNameAndPassword = (
  name: string,
  password: string
): Promise<UserSession | null> => {
return new Promise((resolve) => {
    const users: UserSession[] = usersMock.map((user) => ({
        ...user,
        type: user.type as UserType,
    }));

    // Find the user with the given name and password
    const user = users.find(
        (user) => user.username === name && user.password === password
    );

    // Resolve the user or null if not found
    resolve(user || null);
});
};
