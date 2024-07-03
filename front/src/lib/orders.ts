export async function createOrder(items: OrderItemDTO[], discountCodes?: string[]): Promise<OrderResponseDTO> {
    fetch('http://localhost:8080/orders', {
        method: 'POST'
        headers: {
            'Authorization': 'Bearer' + localStorage.getItem('accessToken') },
            body: JSON.stringify({
                
              })
    })    


}