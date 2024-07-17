import  {Order, OrderDetail} from "@/models/orders"

export async function createOrder(items: OrderDetail[], discountCodes?: string[]) {

  try {
    const response = await fetch('http://localhost:8080/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken') 
      },
      body: JSON.stringify(items)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el llamador
  }
}

export async function fetchByUser(userId: number): Promise<Order[]>{

    try {
      const response = await fetch(`http://localhost:8080/orders/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken') 
        }
        });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
      return data as Order[];
  
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Re-lanza el error para que pueda ser manejado por el llamador
    }
  }