# Laboratorio 07: Crear una Función Lambda en Node.js desde la Consola de AWS

## 🎯 Objetivo

Aprender a crear una función AWS Lambda desde la consola, usando **Node.js** como entorno de ejecución, y probar su ejecución con un mensaje básico de "Hola Mundo".

---

## 🧰 Prerrequisitos

- Usuario IAM con permisos para crear y ejecutar funciones Lambda.

---

## 🛠️ Pasos del laboratorio

---

### 1. Ingresar al servicio Lambda

1. Ve a la consola de AWS: [https://console.aws.amazon.com/lambda](https://console.aws.amazon.com/lambda)
2. Asegúrate de estar en la región deseada (ej. **Norte de Virginia - us-east-2**).
3. Haz clic en **"Create function"**.

---

### 2. Configurar la función Lambda

En la sección **"Create function"**, completa lo siguiente:

- **Nombre de la función:** `LambdaHolaMundo`
- **Tiempo de ejecución (Runtime):** `Node.js 22.x`
- **Architecture:** `x86_64`
- **Execution role:** Deja marcada la opción **"Create a new role with basic Lambda permissions"**
- Haz clic en **"Create function"**

---

### 3. Despliega tu lambda

1. Baja a la sección **"Code source"**
2. Reemplaza el contenido con el siguiente código:
```javascript
export const handler = async (event) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify('!Hola Mundo Serverless!'),
  };
  return response;
};
```
3. Presiona el botón **"Deploy"**.

### 4. Probar el lambda

1. En la sección **"Test"**.
2. En **"Event name"**: Prueba
3. En **"Template - optional"**:
```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
```
4. Haz clic en el botón **"Test"**.
5. Valida la ejecución en **"Details"**.
6. Observarás valores como:
- `Request ID`: Identificador de la ejecución.
- `Duration`: Tiempo que tardó en ejecutar el código en milisegundos (ms).
- `Init duration`: Conocido como el Cold Start (Tiempo de inicialización del lambda).
- `Billed duration`: Tiempo facturado en ms.
- `Max memory used`: Máximo de memoria usado en MB.
- `Resources configured`: Memoria que fue configurada para el lambda.


