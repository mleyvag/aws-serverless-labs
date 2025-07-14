# Laboratorio Nº 16: Crear una función Lambda en Node.js para procesar mensajes desde una cola SQS

## 🎯 Objetivo

Crear una función Lambda escrita en Node.js que se active automáticamente al recibir mensajes desde una cola **SQS estándar**, procesando el contenido de los mensajes.

---

## 🧰 Prerrequisitos

- Tener una **cola SQS estándar** creada (ver Lab Nº 15)
- Permisos para crear funciones Lambda e integrar servicios

---

## 🛠️ Pasos del laboratorio

---

### 1. Crear la función Lambda

1. Ve a la consola del Lambda: https://console.aws.amazon.com/lambda
2. Haz clic en **"Create function"**
3. Selecciona **"Author from scratch"**
4. En **"Function name"**: `lambda-queue`.
5. Finaliza haciendo clic en **"Create function"**.

### 2. Agrega el código al Lambda:

1. En la consola Lambda, ve a la pestaña **"Code"** y reemplaza por el siguiente código:
```bash
export const handler = async (event) => {
    for (const record of event.Records) {
        const body = JSON.parse(record.body);
        console.log("Mensaje recibido desde SQS:");
        console.log("Evento:", body.evento);
        console.log("Origen:", body.origen);
        console.log("Fecha:", body.timestamp);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ mensaje: "Mensajes procesados" }),
    };
}
```
> Estructura del event: https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
2. Luego haz clic en **"Deploy"**.

### 3. Crear politica para Lambda con acciones de SQS

1. En la vista del lambda, selecciona la pestaña **"Configuration > Permissions"**.
2. Haz clic en el **"Role name"**.
3. En **"Permissions"** hacer clic en **"Add permissions > Create inline policy"**.
4. En **"Select a service"**, buscar el servicio `SQS`.
5. ✅ Habilitar la casilla de **"All SQS actions (sqs:*)"**.
6. En **Resources > Specify resource ARNs for these actions.** seleccionar **"All"**.
7. Luego hacer clic en **"Next"**.
8. En **"Policy name"**: `FullAccessSQS`.
9. Finaliza haciendo clic en el botón **"Create policy"**.


### 4. Configurar integración SQS con Lambda

1. Ve a la consola de SQS: https://console.aws.amazon.com/sqs
2. Selecciona la cola `QueueDemo`.
3. Ve a la opción **"Lambda triggers"**.
4. Presiona el botón **"Configure Lambda function trigger"**.
5. En el desplegable **"Choose a function"**, elige la función lambda `lambda-queue`.
6. Luego hacer clic en en el botón **"Save"**.

### 5. Enviar mensaje a la cola SQS

1. Ir al botón **"Send and receive messages"**.
2. En **"Message body"**:
```bash
{
  "evento": "nuevo-usuario",
  "origen": "canal-web",
  "timestamp": "2025-03-03T23:00:00Z"
}
```
3. Hacer clic en **"Send message"**.

### 6. Validar Log del Lambda

1. Ve a la consola del Lambda: https://console.aws.amazon.com/lambda
2. Selecciona `lambda-queue`.
3. Ve a la pestaña **"Monitor"** y luego haz clic en **"View Cloudwatch logs"**.
4. En la sección **"Log Streams"** de la tabla selecciona el primer registro.
5. Te mandará a una nueva ventana **Log events** donde podrás visualizar los logs que registró el Lambda. Ej. 
```BASH
	e18b58af-b4ac-58b1-9b16-38403490e5d9 INFO	Mensaje recibido desde SQS:
	e18b58af-b4ac-58b1-9b16-38403490e5d9 INFO	Evento: nuevo-usuario
	e18b58af-b4ac-58b1-9b16-38403490e5d9 INFO	Origen: canal-web
```