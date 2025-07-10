# Laboratorio 08: Desplegar y Probar una Función Lambda en Python usando AWS CLI

## 🎯 Objetivo

Crear, desplegar y probar una función AWS Lambda escrita en **Python 3.12**, utilizando únicamente la **AWS CLI**.

---

## 🧰 Prerrequisitos

- AWS CLI instalada y configurada (`aws configure`).
- Permisos IAM suficientes para crear funciones Lambda, roles IAM y ejecutarlas (`lambda:*`, `iam:*`).

---

## 📁 Estructura del proyecto

```bash
python-lambda/
├── lambda_function.py
```
---

## 🛠️ Pasos del laboratorio

---

### 1. Comprimir el archivo en un ZIP
1. Ingresa a la carpeta `/python-lambda`.
2. Ejecuta o comprimir el archivo, para generar el `function.zip`.
```bash
> zip function.zip lambda_function.py
```

### 2. Crear un rol IAM para Lambda
1. Ejecutar el siguiente comando para crear un Role IAM.
```bash
> aws iam create-role \
  --role-name python-lambda-role \
  --assume-role-policy-document file://<(cat <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
) --profile admin-personal-account
```
2. Agrega permisos básicos de lambda al role creado.
```bash
> aws iam attach-role-policy \
  --role-name python-lambda-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole \
  --profile admin-personal-account
```
3. Obtener el ARN del role IAM creado.
```bash
> aws iam get-role --role-name python-lambda-role \
   --query 'Role.Arn' \
   --output text \
   --profile admin-personal-account
```

### 3. Crear y desplegar la función Lambda desde CLI

1. Ejecutar el siguiente comando desde donde se encuentra el `function.zip` para crear la función y desplegar el zip con el código fuente.
```bash
> aws lambda create-function \
  --function-name PythonLambdaCLI \
  --runtime python3.12 \
  --handler lambda_function.lambda_handler \
  --role arn:aws:iam::860601563951:role/python-lambda-role \
  --zip-file fileb://function.zip \
  --profile admin-personal-account  
```

### 4. Invocar la función Lambda desde la terminal

1. Ejecutar el siguiente comando para ejecutar el lambda `PythonLambdaCLI`.

```bash
> aws lambda invoke \
  --function-name PythonLambdaCLI \
  --invocation-type RequestResponse \
  --payload '{}' \
  response.json \
  --profile admin-personal-account
```

2. Imprime en la terminal el resultado que se grabó en el archivo response.json

```bash
> cat response.json

{
  "statusCode": 200,
  "body": "Hola desde AWS Lambda ejecutado por CLI"
}

```

