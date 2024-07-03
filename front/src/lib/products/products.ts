import { Color, ColorPost, Image, Material, ProductDetail, Size } from "@/models/products";

export type colorType = "PRIMARY"| "SECONDARY" | "TERTIARY"
export type size = {size: string, stock: number}
export type colorArray = {colorDescription: string, colorHex: string, colortype: colorType}

export async function createProduct(description: string, price: number, sizes: Size[], categories: string[], material:  Material[], colors: ColorPost[], images: Image[]) {
  fetch('http://localhost:8080/products', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer' + localStorage.getItem('accessToken'),
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      description: description,
      price: price,
      sizes: sizes,
      categories: categories,
      material: material,
      colors: colors,
      images: images
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


export async function updateProduct(productId : number , description: string, price: Float32Array, quantity: number, categories: string[], sizesParam: size[], colorsArray: colorArray) {
  fetch(`http://localhost:8080/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer' + localStorage.getItem('accessToken') ,
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      description: description,
      price: price,
      quantity: quantity,
      categories: categories,
      sizes: sizesParam,
      colors: colorsArray
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




export async function fetchAllProducts(): Promise<ProductDetail[]> {
  try {
    const response = await fetch('http://localhost:8080/products', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken') 
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data as ProductDetail[];

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el llamador
  }
}

export function filterByCategorie(
  products: ProductDetail[],
  categorie: string
): ProductDetail[] {
  if (categorie === "None") {
    return products;
  } else {
    return products.filter((product) => product.categories.includes(categorie));
  }
}

export async function fetchById(productId: number): Promise<ProductDetail> {
  try {
    const response = await fetch(`http://localhost:8080/products/${productId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken') 
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data as ProductDetail;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el llamador
  }
}

export async function fetchBySellerId(sellerId: number): Promise<ProductDetail[]> {
  const prods = fetchAllProducts();
  return (await prods).filter((prod) => prod.seller.idSeller === sellerId)
}
