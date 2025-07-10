# Laboratorio 09: Configurar Variables de Entorno, la Memoria y URL Https en una Función Lambda

## 🎯 Objetivo

Aprender a **definir y acceder a variables de entorno** en una función AWS Lambda escrita en **Python**, utilizando la **consola web de AWS** para configurarlas.

---

## 🧰 Prerrequisitos

- Haber completado el **Laboratorio 08** (función `PythonLambdaCLI` creada y funcionando).
- Permisos para modificar funciones Lambda.

---

## 🛠️ Pasos del laboratorio

---

### 1. Ingresar a la consola Lambda

1. Ve a [https://console.aws.amazon.com/lambda](https://console.aws.amazon.com/lambda)
2. Selecciona la región en la que creaste la función (`us-east-2`, por ejemplo).
3. En la lista de funciones, haz clic sobre **`PythonLambdaCLI`**

---

### 2. Editar el código y desplegar el nuevo código

1. Ve a la pestaña **"Code"**
2. Reemplaza el contenido actual por el siguiente:

```python
import os

def lambda_handler(event, context):
    autor = os.environ.get("AUTOR", "Desconocido")
    mensaje = os.environ.get("MENSAJE", "Sin mensaje definido")

    return {
        "statusCode": 200,
        "body": f"{mensaje} - Autor: {autor}"
    }
```
3. Haz clic en **"Deploy"**.

### 3. Agregar variables de entorno

1. Ve a la pestaña **"Configuration"**.
2. Selecciona **"Environment variables"** en el panel lateral.
3. Haz clic en **"Edit"**.

| Clave     | Valor                      |
| --------- | -------------------------- |
| `AUTOR`   | Miguel Leyva               |
| `MENSAJE` | Hola desde Lambda con envs |

4. Haz clic en **"Save"**.

### 4. Cambiar la memoria del Lambda

1. En la sección **"Configuration"**.
2. Ir a **"General configuration"** en la barra lateral.
3. Haz clic en **"Edit"**.
4. En **"Memory"** cambia de `128` a `256` MB.
5. Haz clic en **"Save"**.

### 5. Probar los cambios

1. En la sección **"Test"**.
2. En **"Event name"**: Prueba
3. Todo por defecto y haz clic en **"Test"**.
4. Haz clic en **"Details"**: 

En el `Output` aparecerá la impresión de las variables de entorno: 

```json
{
  "statusCode": 200,
  "body": "Hola desde Lambda con envs - Autor: Miguel Leyva"
}
```

En el `Summary` aparecerá la impresión de las variables de entorno: 
```bash
Resources configured: 256 MB
```

### 6. Generar URL HTTPS para la Lambda

1. Ubicate en la posición **"Configuration"**.
2. En la barra lateral, haz clic en **"Function URL"**.
3. Haz clic en el botón **"Create function URL"**.
4. En **"Auth type"** elijo `NONE`.
5. Haz clic en **"Save"**.
6. Copia el **"Function URL"**

Por ejemplo: `https://uotld5k7otonascnveojexwbde0mmyok.lambda-url.us-east-2.on.aws/`

7. Pega en tu navegador y automáticamente se ejecutará el código lambda.

```bash
Hola desde Lambda con envs - Autor: Miguel Leyva
```