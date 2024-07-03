export async function createOrder(items: Order[], discountCodes?: string[]) {
    const promises = items.map(item => {
        return fetch('http://localhost:8080/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
          },
          body: JSON.stringify({
            "productId": item.productId,
            "quantity": item.quantity,
            "sizeDescription": item.sizeDescription
          })
        })
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation: ', error);
        
    }) 
 }
}

export async function fetchByUser(userId: number): Promise<Order[]>{
    
    try{
        const response = await fetch(`http://localhost:8080/orders/users/${userId}`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }
          });
    
    if(!response.ok) {
        throw new Error('Network response was not ok')
    }

    const orders = await response.json();
    return orders;
    }
}
