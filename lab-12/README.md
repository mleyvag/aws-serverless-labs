# Laboratorio Nº 12: Creación de una tabla DynamoDB con Partition Key y Sort Key

## 🎯 Objetivo

Aprender a crear una tabla en **Amazon DynamoDB** desde la consola web de AWS, utilizando una **clave de partición (partition key)** y una **clave de ordenamiento (sort key)**.

---

## 🧰 Prerrequisitos

- Acceso a la consola de AWS con permisos para usar DynamoDB

---

## 🛠️ Pasos del laboratorio

---

### 1. Ingresar a DynamoDB

1. Ve a la consola: https://console.aws.amazon.com/dynamodb
2. Asegúrate de estar en la región deseada (por ejemplo, `us-east-2`)
3. Haz clic en el botón **"Create table"**

### 2. Configurar la tabla

1. En el campo **"Table name"**, ingresa: `ArticulosBlog`
2. En **"Partition key"**:
   - Nombre: `categoria`
   - Tipo: `String`
3. En **"Sort key"**:
   - Nombre: `fechaPublicacion`
   - Tipo: `String` o `Number` (puedes usar fecha en formato ISO si es string)
4. En **"Table Settings"**: `Default settings`.
5. Haz clic en **"Create table"**.

### 3. Verificar la tabla creada

1. Ve al menú izquierdo y selecciona **"Tables"**
2. Haz clic sobre `ArticulosBlog`
3. Valida en **"Settings" > "General information"** que la tabla tenga las claves:
   - `categoria` como **"Partition key"**.
   - `fechaPublicacion` como **"Sort key"**.
