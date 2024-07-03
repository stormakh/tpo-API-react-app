import usersMock from "@/mock/usersMock.json";
import { UserSession, UserType } from "@/models/users";
import { NavigateFunction } from "react-router-dom";


export async function checkCorrectPath(userType : UserType | null , expected: UserType, navigate : NavigateFunction){
  console.log("eee",userType,expected);
  if(!userType){
    // Redirect to the correct route
    navigate('/');
  }else if(userType !== expected){
    // Redirect to the correct route
    navigate(`/`)
  }
}

export async function fetchAllUsers(userId: number) {
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

export async function createUser(user: UserSession) {
  return  fetch('http://127.0.0.1:8080/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
      password: user.password
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


export async function fetchUserById(userId: number) {
  return  fetch(`http://localhost:8080/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
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

export async function getUserSession(token: string): Promise<UserSession>{
  try {
    const response = await fetch(`http://localhost:8080/user`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token 
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data as UserSession;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el llamador
  }
}
 