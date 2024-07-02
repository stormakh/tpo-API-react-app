import { fetchWithToken } from "@/helpers/api.helper";

export async function fetchAllProducts() {
  fetch('http://localhost:8080/products', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4MDA3NjcsImV4cCI6MTcxOTg4NzE2N30.gb1YXRUqe_R-F0o11eTOCIq-Mp1Kct79NureKKioh6TQcxS168p8DBIeiLVOs4ZxBTND3HPoKQgFYxDfvn3WFQ '
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Aquí procesas los datos obtenidos
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

export async function fetchProductById(productId: number){
  fetch('http://localhost:8080/products/id', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4MDA3NjcsImV4cCI6MTcxOTg4NzE2N30.gb1YXRUqe_R-F0o11eTOCIq-Mp1Kct79NureKKioh6TQcxS168p8DBIeiLVOs4ZxBTND3HPoKQgFYxDfvn3WFQ '
    },
    body: JSON.stringify({
      id: productId,
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Aquí procesas los datos obtenidos
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
} 

async function createProduct(description: string, price: Float32Array, quantity: number, categories: string[] ) {
  fetchWithToken('http://localhost:8080/products', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4Njg0NDQsImV4cCI6MTcxOTk1NDg0NH0.vFielkg-LlSjzjQVEV_OPCfaCkUceTOuhrKY2HAe0taA4RX7pzh9OdtbCl4zkE70zYBFrVEo8Ixa3xxvhV0uow ',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description: description,
      price: price,
      quantity: quantity,
      categories: categories
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Aquí procesas los datos obtenidos
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

async function updateProduct(productId: number, description: string, price: Float32Array, quantity: number, categories: string[] ) {
  fetch(`http://localhost:8080/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4Njg0NDQsImV4cCI6MTcxOTk1NDg0NH0.vFielkg-LlSjzjQVEV_OPCfaCkUceTOuhrKY2HAe0taA4RX7pzh9OdtbCl4zkE70zYBFrVEo8Ixa3xxvhV0uow ',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description: description,
      price: price,
      quantity: quantity,
      categories: categories
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Aquí procesas los datos obtenidos
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

async function deleteProduct(productId: number) {
  fetch(`http://localhost:8080/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4Njg0NDQsImV4cCI6MTcxOTk1NDg0NH0.vFielkg-LlSjzjQVEV_OPCfaCkUceTOuhrKY2HAe0taA4RX7pzh9OdtbCl4zkE70zYBFrVEo8Ixa3xxvhV0uow ',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Aquí procesas los datos obtenidos
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

