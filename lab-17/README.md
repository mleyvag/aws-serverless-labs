# Laboratorio Nº 17: Crear un tópico SNS estándar desde la consola

## 🎯 Objetivo

Aprender a crear un **tópico estándar de Amazon SNS (Simple Notification Service)** desde la consola web de AWS y enviar mensajes de prueba a suscriptores.

---

## 🧰 Prerrequisitos

- Permisos para usar Amazon SNS
- Acceso a una dirección de correo electrónico válida (para recibir las notificaciones)

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
    - **"Name"**: `SNS-Email`.
    - Todo los demas valores por defecto.
2. Haz clic en **"Create topic"**

### 3. Crear la suscripción

1. Dentro del tópico `SNS-Email`, haz clic en **"Create suscription"**.
2. En el desplegable de **"Protocol"**: `Email`.
3. En el campo **"Endpoint"**: `<your-mail>@gmail.com`.
4. Finaliza haciendo clic en **"Create suscription"**.

> Esto tomará unos momentos hasta que confirmes el correo que te envían al buzón: Estado inicial: 'Pending confirmation'.

### 4. Confirmar la suscripción

1. Revisa tu correo electrónico
2. Deberías recibir un mensaje de AWS SNS con un enlace de confirmación
3. Haz clic en el enlace **"Confirm subscription"**
4. Regresa a la consola SNS y verifica que el estado cambió a **"Confirmed"**.

### 5. Publicar un mensaje de prueba

1. En la barra lateral de Amazon SNS haz clic en **"Topics"**.
2. Ingresa al tópico `SNS-Email`, y luego haz clic en **"Publish message"**.
3. En **"Subject - optional"**: `Prueba`.
4. En **"Message body to send to the endpoint"**: `Hola, este es un mensaje de prueba desde SNS!`.
5. Haz clic en **"Publish message"**.
6. Revisa tu correo electrónico para confirmar la recepción que fue enviada desde `no-reply@sns.amazonaws.com` con el asunto y mensaje puesto anteriormente.


