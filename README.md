# MPCheckout-Backend
Mini proyecto que hice buscando aprender como integrar un pago con MercadoPago a una aplicación web. En este caso solo se maneja el backend unicamente necesario para el pago de MP.

# Como probarlo? 
1. Clonar el repositorio.
2. Crear una integración desde tu panel de desarrollador de MercadoPago
3. Copiar el AccessToken de la integración.
4. Crear un archivo .env
5. Poner el Access Token de la siguiente forma: `MERCADO_PAGO_ACCESS_TOKEN = "<TU_TOKEN>"`
6. Correr el servidor localmente de la siguiente forma: `node index.js`
