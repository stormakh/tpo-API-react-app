import { UserSession } from "@/models/users";

const url = 'http://localhost:8080/auth';

export async function login(email: string, password: string) {
  const response = await fetch(`${url}/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  const data = await response.json();
  return data.access_token; // Returns the access_token
}

export async function register(user :any) {
  try {
    const response = await fetch(`${url}/register`, {
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
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}
