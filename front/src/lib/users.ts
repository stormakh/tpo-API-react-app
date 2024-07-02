import usersMock from "@/mock/usersMock.json";
import { UserSession, UserType } from "@/models/users";
import { NavigateFunction } from "react-router-dom";


export async function checkCorrectPath(userType : UserType | null , expected: UserType, navigate : NavigateFunction){
  if(!userType){
    // Redirect to the correct route
    navigate('/');
  }else if(userType !== expected){
    // Redirect to the correct route
    navigate(`/`)
  }
}

async function createUser(firstName: string, lastName: string, clientEmail: string, clientPassword: string) {
  return  fetch('http://127.0.0.1:8080/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email: clientEmail,
      password: clientPassword
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data; 
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

async function fetchUserById(userId: number) {
  return  fetch(`http://localhost:8080/user/${userId}`, {
    method: 'GET'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data; // Devuelve el access_token
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
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