# Laboratorio 10: Crear y Desplegar un API REST Mock usando Amazon API Gateway

## 🎯 Objetivo

Aprender a crear un **API RESTful tipo Mock** con **Amazon API Gateway** desde la **consola de AWS**, configurando una respuesta simulada sin integración con backend.

---

## 🧰 Prerrequisitos

- Acceso a la consola de AWS.
- Permisos para crear recursos en **API Gateway**.

---

## 🛠️ Pasos del laboratorio

---

### 1. Crear el API Gateway

1. Accede a la consola: [https://console.aws.amazon.com/apigateway](https://console.aws.amazon.com/apigateway)
2. Asegúrate de estar en la región deseada (por ejemplo, `us-east-2`)
3. En el panel izquierdo, selecciona **"APIs" > "Create API"**.
4. Selecciona **"REST API"**, haz clic en **"Build"**.
5. Configura lo siguiente:
   - **API name**: `API-Mock-Demo`
   - **API endpoint type**: Regional
6. Haz clic en **"Create API"**.

---

### 2. Crear un recurso

1. En el menú izquierdo, selecciona `/` (raíz).
2. Haz clic en **"Create resource"**.
3. Configura:
   - **Resource path**: `/`
   - **Resource name**: `empleados`
4. Haz clic en **"Create resource"**.

---

### 3. Crear un método Mock (GET)

1. Selecciona el recurso `/empleados`.
2. En el desplegable, selecciona `GET`.
3. En el campo **Integration Type**, selecciona: `Mock`.
4. Haz clic en **"Create method"**.

---

### 4. Configurar la respuesta de prueba

1. Haz clic en **“Integration Response”**.
2. En `200`, haz clic en **"Edit"** y agrega en **"Mapping Templates > Template Body"**:

```json
[{
  "nombre": "Miguel",
  "apellido": "Leyva",
  "numDoc": "12345678",
  "telefono": "999888777"
},
{
  "nombre": "Angel",
  "apellido": "Perez",
  "numDoc": "12345678",
  "telefono": "999888777"
}]
```
3. Finaliza con clic en **"Save"**.

### 5. Despliega el API

1. Haz clic en **"Deploy API"**.
2. En el desplegable de **"Stage"** elige **"New Stage"**.
3. En **"Stage name"**: `dev`
4. Haz clic en **"Deploy"**
5. Copia la URL de **"Invoke URL"**.
Ejemplo: `https://sfydyety1d.execute-api.us-east-2.amazonaws.com/dev`
6. Agrega a la URL + `/empleados` y pegalo en un navegador.

`Respuesta:`

```bash
[{
  "nombre": "Miguel",
  "apellido": "Leyva",
  "numDoc": "12345678",
  "telefono": "999888777"
},
{
  "nombre": "Angel",
  "apellido": "Perez",
  "numDoc": "12345678",
  "telefono": "999888777"
}]
```
