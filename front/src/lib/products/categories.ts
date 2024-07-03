import { Category } from "@/models/products";

export async function fetchAllCategories(): Promise<Category[]> {
    try {
        const response = await fetch('http://localhost:8080/api/categories', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken') 
          }
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        return data as Category[];
    
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-lanza el error para que pueda ser manejado por el llamador
      }
}

export async function createCategory(name: string) {
    return  fetch(`http://127.0.0.1:8080/categories`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4Njg0NDQsImV4cCI6MTcxOTk1NDg0NH0.vFielkg-LlSjzjQVEV_OPCfaCkUceTOuhrKY2HAe0taA4RX7pzh9OdtbCl4zkE70zYBFrVEo8Ixa3xxvhV0uow ',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
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

export async function deteleCategory(name: string) {
    return  fetch(`http://127.0.0.1:8080/categories`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4Njg0NDQsImV4cCI6MTcxOTk1NDg0NH0.vFielkg-LlSjzjQVEV_OPCfaCkUceTOuhrKY2HAe0taA4RX7pzh9OdtbCl4zkE70zYBFrVEo8Ixa3xxvhV0uow ',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
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