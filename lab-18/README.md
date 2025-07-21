# Laboratorio Nº 18: Suscripciones múltiples en SNS - Lambda y SQS

## 🎯 Objetivo

Aprender a crear un flujo de notificaciones usando SNS, donde un mensaje será entregado simultáneamente a una función Lambda y a una cola SQS estándar.

---

## 🧰 Prerrequisitos

- Acceso a la consola de AWS
- Permisos IAM para crear recursos (SNS, Lambda, SQS, IAM roles)

---

## 🛠️ Pasos del laboratorio

---

### 1. Acceder a Amazon SNS

1. Ve a la consola: [https://console.aws.amazon.com/sns/](https://console.aws.amazon.com/sns/)
2. Asegúrate de estar en la región deseada (por ejemplo, `us-east-2`)
3. Haz clic en **"Topics"** en el panel izquierdo
4. Haz clic en **"Create topic"**

### 2. Crear un tópico estándar

1. Configura el tópico con los siguientes valores:
    - **"Type"**: `Standard`.
    - **"Name"**: `SNS-Lambda-SQS`.
    - Todo los demas valores por defecto.
2. Haz clic en **"Create topic"**.
3. Copia en tu portapapeles el **"ARN"**. Ej. `arn:aws:sns:us-east-2:860601563951:SNS-Lambda-SQS`


### 3. Crear la función Lambda

1. Ve a la consola del Lambda: https://console.aws.amazon.com/lambda
2. Haz clic en **"Create function"**
3. Selecciona **"Author from scratch"**
4. En **"Function name"**: `sns-lambda`.
5. Finaliza haciendo clic en **"Create function"**.

### 4. Agrega el código al Lambda:

1. En la consola Lambda, ve a la pestaña **"Code"** y reemplaza por el siguiente código:
```bash
export const handler = async (event) => {
  console.log("Mensaje recibido en Lambda:", JSON.stringify(event, null, 2));
  return {
    statusCode: 200,
    body: "OK",
  };
};
```
2. Luego haz clic en **"Deploy"**.

### 5. Crear la cola SQS

1. Ve a la consola del Lambda: https://console.aws.amazon.com/sqs
2. Haz clic en **"Create queue"**
3. Escoge el **"Type"** -> `Standard`.
4. En **"Name"** -> `SNS-SQS`.
5. Todos los valores por defecto.
6. Finaliza haciendo clic en **"Create queue"**.

### 6. Configura las suscripciones del SNS

1. Ve a la consola del Lambda: https://console.aws.amazon.com/sns
2. Selecciona **"Topics"** de la barra lateral.
3. Luego haz clic en el topic `SNS-Lambda-SQS`.
4. En **"Suscriptions**, haz clic en **"Create subscription"**.
5. En el desplegable de **"Protocol"**, elige **"AWS Lambda"**.
6. En el endpoint, en el buscador selecciona el arn del lambda. Ej. `arn:aws:lambda:us-east-2:860601563951:function:sns-lambda`.
7. Finaliza haciendo clic en **"Create suscription"**.
8. Repite el paso 4.
9. En el desplegable de **"Protocol"**, elige **"Amazon SQS"**.
10. En el endpoint, en el buscador selecciona el arn del lambda. Ej. `arn:aws:sqs:us-east-2:860601563951:SNS-SQS`.

### 7. Realizar prueba con un mensaje al Topico SNS

1. Ve a la consola del Lambda: https://console.aws.amazon.com/sns
2. Selecciona **"Topics"** de la barra lateral.
3. Luego haz clic en el topic `SNS-Lambda-SQS`.
4. Hacer clic en **"Publish message"**.
5. En **"Subject"** -> `Asunto prueba del mensaje`.
6. En **"Message body to send to the endpoint"** -> `Mensaje para Lambdas y SQS`.
7. Finaliza haciendo clic en **"Publish message"**.

### 8. Validación del envío en el lambda

1. Validamos el lambda en **"Monitor** del lambda `sns-lambda`.
2. Hacemos clic en **"View Cloudwatch logs**.
3. Validamos en **"Log streams"** el log que se cargó y le hacemos clic al registro.
4. Verificamos el detalle del log con los datos del mensaje enviados desde el Tópico SNS.

### 9. Validación del envío en el SQS

1. Validamos el SQS `SNS-SQS`.
2. Hacemos clic en **"Send and receive messages"**.
3. Hacemos clic en el botón inferior **"Poll for messages"**.
4. Revisamos el detalle del registro cargado para obtener los datos del mensaje que fueron enviados desde el Tópico SNS. (1 sólo mensaje para 2 diferentes destinatarios).