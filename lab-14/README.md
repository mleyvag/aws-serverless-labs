# Laboratorio Nº 14: Búsquedas en DynamoDB con Scan y Query

## 🎯 Objetivo

Aprender a realizar búsquedas en una tabla DynamoDB utilizando las operaciones **Scan** y **Query** desde la consola de AWS, entendiendo sus diferencias y usos recomendados.

---

## 🧰 Prerrequisitos

- Haber creado la tabla `ArticulosBlog` con:
  - Partition Key: `categoria` (String)
  - Sort Key: `fechaPublicacion` (String)

---

## 🛠️ Pasos del laboratorio

---

### 1. Acceder a la tabla desde la consola

1. Inicia sesión en: https://console.aws.amazon.com/dynamodb
2. Ir a la sección de **"Tables"** en la barra lateral.
2. Selecciona la tabla **`ArticulosBlog`**.
3. Ve al menú izquierdo **"Explore table items"**

### 2. Búsqueda con **Scan** (escaneo completo)

1. Clic en la opción **"Scan"** (opción por defecto).
2. Clic en el botón **"Run"**.
3. Se mostrarán todos los ítems de la tabla sin filtros.
4. Puedes ordenar los items en la columnas `Partition key` y `Sort key`(ej. `categoria` ó `fechaPublicacion`) para visualización.

### 3. Agregar un filtro en el **Scan**

1. En la parte superior, haz clic en **"Filters"**:
2. Filtro:
   - **"Attribute name"**: `categoria`
   - **"Condition"**: `Equal to`
   - **"Type"**: `tecnologia`
3. Haz clic en **"Run"**.

> Esto filtrará los resultados después del escaneo.

📌 **Importante**: Scan revisa **toda la tabla**, por lo que no es eficiente en tablas grandes.

### 4. Búsqueda con **Query**

1. Clic en la opción **"Query"**.
2. Clic en el botón **"Reset"**
3. En **"Partition key"**: `tecnologia`.
4. Haz clic en **"Run"**.

> Esto devolverá todos los artículos de la categoría `tecnologia`.

📌 **Importante**: Query es más eficiente, ya que usa índices y no escanea toda la tabla.

 
