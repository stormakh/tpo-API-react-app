async function fetchAllProducts() {
  fetch('http://localhost:8080/products', {
    method: 'GET', // o 'PUT'
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

async function createProduct(description, price, quantity, categories  ) {
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


console.log(createProduct("crop top", 12.33, 3, [] ));

