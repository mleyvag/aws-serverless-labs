# Laboratorio 05: Subir un Archivo a un Bucket S3 y Acceder desde la Web

## 🎯 Objetivo

Aprender a crear un bucket en Amazon S3, cargar archivos y configurar sus permisos para acceder públicamente a través de un navegador web.

---

## 🧰 Prerrequisitos

- Acceso por consola con permisos suficientes para gestionar S3.
- Tener un archivo local para subir.

---

## 📦 ¿Qué es Amazon S3?

Amazon S3 (Simple Storage Service) es un servicio de almacenamiento de objetos escalable que permite guardar y recuperar cualquier tipo de archivo desde la web o aplicaciones.

---

## 🛠️ Pasos del laboratorio

---

### 1. Crear un Bucket S3

1. Accede a la consola de AWS: [https://console.aws.amazon.com/s3/](https://console.aws.amazon.com/s3/)
2. Haz clic en **"Create bucket"**.
3. Configura los siguientes campos:
   - **Bucket type:** `General purpose`
   - **Bucket name:** `lab-s3-bucket-mleyvag`
   - **Region:** elige la misma región que usas normalmente.
   - Desactiva la opción **Block all public access**
   - Marca la casilla de advertencia para permitir acceso público **"(I acknowledge that the current settings might result in this bucket and the objects within becoming public.)"**
4. Haz clic en **"Create bucket"**

### 2. Subir un archivo

1. Ingresa al bucket creado.
2. Haz clic en **"Upload"**.
3. Selecciona tu archivo (ejemplo: `dog.jpg`).
4. Haz clic en **"Upload"** para cargar el archivo.

### 3. Hacer el archivo público

1. Una vez subido el archivo, selecciónalo desde la consola.
2. Haz clic en el botón **"Actions > Share with a presigned URL"**.
3. Elige el intervalo de tiempo de expiración a **"Minutes"**.
4. Ingresa el valor de 1 en el **"Number of minutes"**.
5. Confirma la acción con el botón **"Create presigned URL"**.
6. Abre la ventana de incognito de algún navegador y pegas la URL que se grabó en el portapapeles.
7. Posterior a 1 min, la URL habrá caducado sin poder ver la imagen.

> ⚠️ *Este paso expone el archivo públicamente. Solo debe hacerse con archivos que no contengan datos sensibles.*

### 4. Subir nuevo archivo público desde la terminal

1. Ingresa a la terminal.
2. Posicionate en el directorio de `lab-05` desde la terminal. (Utiliza Powershell desde Windows)
3. Ejecutar los comandos cli de aws v2 para subir el nuevo archivo al S3 Bucket:
``` bash
> aws s3 cp cat.jpg s3://lab-s3-bucket-mleyvag/ --profile admin-personal-account
```
4. Refrescamos el S3 Bucket en la consola de AWS para ver que el nuevo archivo ha sido subido.

### 5. Generar URL firmada desde la terminal

1. Generar una URL firmada con expiración desde la terminal:
``` bash
> aws s3 presign s3://lab-s3-bucket-mleyvag/cat.jpg --expires-in 60
```
2. Accede desde incognito desde algun navegador y podrías visualizar la imagen con la URL publica durante unos 60 segundos.