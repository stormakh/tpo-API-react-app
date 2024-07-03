import { UserSession } from "@/models/users";

export async function login(email: string, password: string) {
  
  const response = await fetch('http://127.0.0.1:8080/auth/authenticate', {
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
 
export async function register(user: UserSession) {
  try {
    const response = await fetch('http://127.0.0.1:8080/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}   