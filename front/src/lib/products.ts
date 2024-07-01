import productsMock from "@/mock/productsMock.json";
import { Product } from "@/models/products";

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

export function filterByCategorie(
  products: Product[],
  categorie: string
): Product[] {
  if (categorie === "None") {
    return products;
  } else {
    return products.filter((product) => product.categories.includes(categorie));
  }
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

export async function createProduct(description: string, price: Float32Array, quantity: number, categories: string[] ) {
  fetch('http://localhost:8080/products', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4MDA3NjcsImV4cCI6MTcxOTg4NzE2N30.gb1YXRUqe_R-F0o11eTOCIq-Mp1Kct79NureKKioh6TQcxS168p8DBIeiLVOs4ZxBTND3HPoKQgFYxDfvn3WFQ '
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

export async function updateProduct(description: string, price: Float32Array, quantity: number, categories: string[] ) {
  fetch('http://localhost:8080/products', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4MDA3NjcsImV4cCI6MTcxOTg4NzE2N30.gb1YXRUqe_R-F0o11eTOCIq-Mp1Kct79NureKKioh6TQcxS168p8DBIeiLVOs4ZxBTND3HPoKQgFYxDfvn3WFQ '
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


