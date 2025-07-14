# Laboratorio Nº 15: Crear una cola estándar en SQS y enviar mensajes desde la consola

## 🎯 Objetivo

Crear una **cola estándar** en Amazon SQS (Simple Queue Service) desde la consola web de AWS y enviar mensajes de prueba para observar cómo se almacenan y visualizan.

---

## 🧰 Prerrequisitos

- Permisos para crear recursos SQS

---

## 🛠️ Pasos del laboratorio

---

### 1. Acceder a Amazon SQS

1. Ve a la consola: [https://console.aws.amazon.com/sqs/](https://console.aws.amazon.com/sqs/)
2. Asegúrate de estar en la región deseada (ej. `us-east-2`)
3. Haz clic en **"Create queue"**

---

### 2. Crear una cola estándar

1. En **"Type"**: `Standard`
2. En **"Name"**: `QueueDemo`
3. Mantén la configuración predeterminada.
    - **"Message retention period"**: 4 días
    - **"Maximum message size"**: 256 KB
    - **"Visibility timeout"**: 30 segundos
4. Haz clic al final en **"Create queue"**.

### 3. Enviar mensajes a la cola

1. Una vez creada, haz clic sobre el nombre de la cola `QueueDemo`.
2. Haz clic en la pestaña **"Send and receive messages"**.
3. En la sección **"Send message"**.
4. Escribe lo siguiente como **"Message body"**:
```json
{
"evento": "Nuevo registro",
"origen": "aplicacion-web",
"timestamp": "2025-07-06T23:00:00Z"
}
```
5. Haz clic en el botón **"Send message"**.

### 4. Verificar mensajes en la cola

1. En la parte inferior **"Receive messages"** de la misma pestaña.
2. Haz clic en el botón **"Poll for messages"**.
3. En el listado de **"Messages"**, aparecera un ID ej. `6a8e4e61-5f40-4622-a839-c841e1175ecc`.
4. Puedes visualizar el contenido del mensaje y su metadata haciendo clic en el ID.
5. Cierra el modal haciendo clic en el botón **"Done"**.

### 5. Eliminar mensajes en la cola

1. Puedes eliminar el mensaje si deseas simular un consumidor que lo procesa. Haz clic en en la casilla ✅.
2. Para eliminar el mensaje presiona el botón **"Delete"** y confirma nuevamente en el botón **"Delete**.
3. Para refrescar haz clic en el botón **"Poll for messages"**. No deberia aparecer el mensaje eliminado.
