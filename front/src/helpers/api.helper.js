const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3F1aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTk4Njg0NDQsImV4cCI6MTcxOTk1NDg0NH0.vFielkg-LlSjzjQVEV_OPCfaCkUceTOuhrKY2HAe0taA4RX7pzh9OdtbCl4zkE70zYBFrVEo8Ixa3xxvhV0uow';

export async function fetchWithToken(url, options = {}) {
    options.headers = options.headers || {};
  
    // Agregar el token de autorización a los encabezados
    options.headers['Authorization'] = `Bearer ${accessToken}`;
    options.headers['Content-Type'] = 'application/json';
  
    // Verificar si hay un cuerpo para la solicitud
    if (options.body) {
      // Convertir el cuerpo a JSON si es un objeto
      options.body = JSON.stringify(options.body);
    }
  
    return fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-lanza el error para que pueda ser manejado por el caller
      });
}
