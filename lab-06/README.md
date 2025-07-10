# Laboratorio 06: Hosting de una Web Estática en S3 usando AWS CLI

## 🎯 Objetivo

Aprender a configurar un bucket S3 como hosting estático y subir una landing page (HTML + CSS + JS) usando AWS CLI, con acceso público a través de un navegador web.

---

## 🧰 Prerrequisitos

- Cuenta AWS y CLI configurada (ver laboratorios anteriores).
- Usuario IAM con permisos para usar S3 (`s3:*` o mínimo: `s3:PutObject`, `s3:GetObject`, `s3:PutBucketPolicy`, `s3:ListBucket`).
- Archivos listos:
  - `index.html`
  - `estilos.css`
  - `app.js`

---

## 📁 Estructura de archivos

```bash
static-web/
├── index.html
├── estilos.css
└── app.js
```

---

## 🛠️ Pasos del laboratorio

---

### 1. Crear un Bucket S3

1. Accede a la consola de AWS: [https://console.aws.amazon.com/s3/](https://console.aws.amazon.com/s3/)
2. Haz clic en **"Create bucket"**.
3. Configura los siguientes campos:
   - **Bucket type:** `General purpose`
   - **Bucket name:** `lab-s3-bucket-web-static-mleyvag`
   - **Region:** elige la misma región que usas normalmente.
   - Desactiva la opción **Block all public access**
   - Marca la casilla de advertencia para permitir acceso público **"(I acknowledge that the current settings might result in this bucket and the objects within becoming public.)"**
4. Deja el resto con valores por defecto y haz clic en **"Create bucket"**.

### 2. Agregar política de acceso público al bucket

1. En la sección `General purpose buckets`, haz clic sobre `lab-s3-bucket-web-static-mleyvag`.
2. Ve a la pestaña **"Permissions"**.
3. En la sección **"Bucket policy"**, haz clic en **"Edit"**.
4. Copia y pega la siguiente política, reemplazando `lab-s3-bucket-web-static-mleyvag` por tu nombre real de bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForWebsite",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::lab-s3-bucket-web-static-mleyvag/*"
    }
  ]
}
```
5. Guarda los cambios con **"Save changes"**.

### 2. Habilitar el bucket como sitio web estático

1. Dentro del bucket, ve a la pestaña **"Properties"**.
2. Baja hasta "Static website hosting".
3. Haz clic en **"Edit"**.
4. Activa la opción **"Static website hosting"** en `Enable`.
5. En **"Index Document"** especifica el documento inicial de tu sitio web: `index.html`.
6. Haz clic en **"Save Changes"**.

### 3. Subir archivos usando AWS CLI

Desde tu terminal, navega hasta la carpeta donde están los archivos (`static-web/`):

```bash
> aws s3 cp . s3://lab-s3-bucket-web-static-mleyvag/ --recursive --profile admin-personal-account
```

### 4. Acceder al sitio web

1. Ve a la pestaña **"Properties"** del bucket.
2. En la sección **"Static website hosting"**, copia la URL del sitio:
- Ejemplo: **http://lab-s3-bucket-web-static-mleyvag.s3-website.us-east-2.amazonaws.com**.
3. Pega la URL en tu navegador y verifica que tu sitio web estático se carga correctamente.
