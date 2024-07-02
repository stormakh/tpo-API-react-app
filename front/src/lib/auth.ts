
export async function login(email: string, password: string) {
    return  fetch('http://127.0.0.1:8080/auth/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
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
  
  export async function register(firstname: string, lastname: string, email: string, password: string) {
    return  fetch('http://127.0.0.1:8080/auth/register', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4Njg0NDQsImV4cCI6MTcxOTk1NDg0NH0.vFielkg-LlSjzjQVEV_OPCfaCkUceTOuhrKY2HAe0taA4RX7pzh9OdtbCl4zkE70zYBFrVEo8Ixa3xxvhV0uow ',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      })
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