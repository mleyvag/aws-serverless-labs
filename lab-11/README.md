# Laboratorio Nº 11: Desplegar un API REST integrado a Lambda con Node.js desde la consola

## 🎯 Objetivo

Crear una **API RESTful** con **Amazon API Gateway** que invoque una **función Lambda escrita en Node.js**. El endpoint será público y permitirá recibir solicitudes `POST` con datos JSON, procesarlos y retornar una respuesta personalizada.

---

## 🧰 Prerrequisitos

- Acceso a la consola web
- Permisos para crear funciones Lambda, roles IAM y APIs Gateway

---

## 🛠️ Pasos del laboratorio

---

### 1. Crear la función Lambda (Node.js)

1. Ve a la consola Lambda: [https://console.aws.amazon.com/lambda](https://console.aws.amazon.com/lambda)
2. Haz clic en **"Create function"**.
3. Elige **"Author from scratch"**.
4. En **"Function name"**: `lambda-api`
5. En el desplegado del **"Runtime"**: `Node.js 22.x`
6. Haz clic en **"Create function"**

---

### 2. Escribir el código en Node.js

1. En la sección **"Code"** en el archivo `index.mjs`reemplaza el contenido de la función con el siguiente código:
```javascript
export const handler = async (event) => {
    const body = event.body ? JSON.parse(event.body) : {};
    const nombre = body.nombre || "invitado";

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            mensaje: `Hola ${nombre}, tu solicitud fue procesada correctamente.`,
            datosRecibidos: body
        })
    };
};
```
2. Luego haz clic en **"Deploy"**.

### 3. Crea la API REST en API Gateway

1. Ve a https://console.aws.amazon.com/apigateway
2. En el menú lateral, selecciona **"APIs"** > **"Create API"**.
3. Elige **"REST API"** y haz clic en **"Build"**.
4. Elige **"New API"**.
5. En **"API name"** `api-rest-lambda`.
6. En **"API endpoint type"** `regional`.
7. Haz clic en **"Create API"**.

### 4. Crea el recurso `/procesar`

1. Selecciona el recurso raíz `/`
2. Clic en **"Create resource"**.
3. En **"Resource path"** : `/`
4. En **"Resource name"** : `procesar`
5. Haz clic en **"Create resource"**

### 5. Crear el metodo `POST`

1. Selecciona el recurso `/procesar`.
2. Selecciona `POST`en el desplegado de **"Method type"**.
3. En **"Integration type"** : `Lambda function`.
4. Habilitar **"Lambda proxy integration"**.
5. En **"Lambda function"** elige la region `us-east-2` y el nombre de tu funcion. Por ejemplo: `arn:aws:lambda:us-east-2:860601563951:function:lambda-api`.
6. Finaliza haciendo clic en **"Create method"**.

### 6. Desplegar el API

1. Clic en el botón **"Deploy API"**.
2. En el desplegable de **"Stage"** : `*New stage*`.
3. En **"Stage name"** : `dev`.
4. Haz clic en el botón **"Deploy"**.

### 7. Probar el API

1. Copio la URL de **"Invoke URL"**. Ejemplo: `https://jj8vky8xtg.execute-api.us-east-2.amazonaws.com/dev`
2. Creo un Request en el Postman de Tipo `POST` en la URL pego la anterior ruta + `/procesar`.
3. En **"Body"** selecciono `raw` del desplegable y pego lo siguiente:
```json
{"nombre": "Miguel"}
```
4. En el resultado obtenemos:
```json
{
    "mensaje": "Hola Miguel, tu solicitud fue procesada correctamente.",
    "datosRecibidos": {
        "nombre": "Miguel"
    }
}
```




