import { Category } from "@/models/products";

async function apiRequest(url: string, method: string, body?: any): Promise<any> {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
}

export async function fetchAllCategories(): Promise<Category[]> {
  const url = 'http://localhost:8080/categories';
  return apiRequest(url, 'GET');
}

export async function createCategory(name: string) {
  const url = 'http://127.0.0.1:8080/categories';
  return apiRequest(url, 'POST', { name });
}

export async function deleteCategory(name: string) {
  const url = 'http://127.0.0.1:8080/categories';
  return apiRequest(url, 'DELETE', { name });
}
