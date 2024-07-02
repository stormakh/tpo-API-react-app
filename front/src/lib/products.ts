import { Product } from "@/models/products";

export async function createProduct(description: string, price: Float32Array, quantity: number, categories: string[] ) {
  fetch('http://localhost:8080/products', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer' + localStorage.getItem('accessToken') },
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

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch('http://localhost:8080/products', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4MDA3NjcsImV4cCI6MTcxOTg4NzE2N30.gb1YXRUqe_R-F0o11eTOCIq-Mp1Kct79NureKKioh6TQcxS168p8DBIeiLVOs4ZxBTND3HPoKQgFYxDfvn3WFQ '
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data as Product[];

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el llamador
  }
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

export async function fetchById(productId: number): Promise<Product>{
  try {
    const response = await fetch(`http://localhost:8080/products/${productId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4MDA3NjcsImV4cCI6MTcxOTg4NzE2N30.gb1YXRUqe_R-F0o11eTOCIq-Mp1Kct79NureKKioh6TQcxS168p8DBIeiLVOs4ZxBTND3HPoKQgFYxDfvn3WFQ '
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data as Product;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el llamador
  }
}

export async function fetchBySellerId(sellerId: number): Promise<Product[]> {
  const prods = fetchAllProducts();
  return (await prods).filter((prod) => prod.seller.idSeller === sellerId)
}
