
export async function fetchAllSizes() {
    return  fetch('http://127.0.0.1:8080/api/sizes', {
      method: 'GET',
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
        return data; 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}


export async function fetchSizeById(sizeId: number) {
    return  fetch(`http://127.0.0.1:8080/api/sizes/${sizeId}`, {
      method: 'GET',
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
        return data; // Devuelve el access_token
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

export async function createSize(description: string, stock: number, id_product: number) {
    return  fetch(`http://127.0.0.1:8080/api/sizes`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4Njg0NDQsImV4cCI6MTcxOTk1NDg0NH0.vFielkg-LlSjzjQVEV_OPCfaCkUceTOuhrKY2HAe0taA4RX7pzh9OdtbCl4zkE70zYBFrVEo8Ixa3xxvhV0uow ',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: description,
        stock: stock,
        id_product: id_product
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

export async function deleteSize(sizeId: number) {
    return  fetch(`http://127.0.0.1:8080/api/sizes/${sizeId}`, {
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
        return data; // Devuelve el access_token
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}