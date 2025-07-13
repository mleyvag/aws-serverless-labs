# Laboratorio Nº 13: Insertar, editar y eliminar ítems en una tabla DynamoDB desde la consola

## 🎯 Objetivo

Insertar, editar y eliminar items en una tabla DynamoDB utilizando la consola web de AWS, explorando los modos de entrada visual y por JSON.

---

## 🧰 Prerrequisitos

- Haber creado la tabla `ArticulosBlog` con:
  - **Partition key**: `categoria` (String)
  - **Sort key**: `fechaPublicacion` (String o Number)
- Acceso a la consola AWS con permisos sobre DynamoDB

---

## 🛠️ Pasos del laboratorio

---

### 1. Acceder al explorador de elementos

1. Ir a la consola: https://console.aws.amazon.com/dynamodb
2. En la barra lateral en **"Tables"**, selecciona la tabla `ArticulosBlog`.
3. Haz clic en **"Explore table items"**.
4. Haz clic en el botón **"Create item"**.

---

### 2. Insertar ítem en modo visual

1. En el modo **visual** (Formulario), completa los campos:

   | Clave               | Tipo     | Valor                                  |
   |---------------------|----------|----------------------------------------|
   | categoria           | String   | tecnologia                             |
   | fechaPublicacion    | String   | 2025-07-01                             |

2. Haz clic en **"Add new atribute"** por cada tipo.

   | Clave               | Tipo     | Valor                                  |   
   |---------------------|----------|----------------------------------------|
   | titulo              | String   | Qué es AWS Lambda                      |
   | autor               | String   | Miguel Leyva                           |
   | etiquetas           | List     | ["serverless", "lambda", "aws"]        |

3. Haz clic en **"Create item"**

---

### 3. Insertar ítem en modo JSON

1. Vuelve a hacer clic en **"Crear item"**
2. Haz clic en el botón **"JSON view"**.
3. Desactiva el **"View DynamoDB JSON"**.
4. Pega el siguiente contenido:

```json
{
  "categoria": "seguridad",
  "fechaPublicacion": "2025-07-05",
  "titulo": "Mejores prácticas de IAM en AWS",
  "autor": "Miguel Leyva",
  "etiquetas": ["seguridad", "iam", "roles"]
}
```
5. Haz click en **"Create item"**.

### 4. Editar un ítem 

1. Selecciona el ítem de **"categoria (_String_)"** igual a `tecnologia`.
2. Edita el atributo **"autor"** por el valor `Angel`.
3. Finaliza haciendo clic en **"Save and close"**.

### 5. Eliminar un ítem

1. Seleccionar un item en la casilla ✅
2. Luego hacer clic en **"Actions > Delete items"**.
3. Confirmar la eliminación en el bóton **"Delete"**.