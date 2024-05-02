import usersMock from "@/mock/usersMock.json";
import { UserSession, UserType } from "@/models/users";
import { NavigateFunction } from "react-router-dom";


export async function checkCorrectPath(userType : UserType | undefined , expected: UserType, navigate : NavigateFunction){
  if(!userType){
    // Redirect to the correct route
    navigate('/login');
  }else if(userType !== expected){
    // Redirect to the correct route
    navigate('/')
  }
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
