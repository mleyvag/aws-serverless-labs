# Laboratorio 03: Habilitar el MFA y Establecer una Alerta de Facturación

## 🎯 Objetivo

Mejorar la **seguridad de la cuenta AWS** habilitando el **Multi-Factor Authentication (MFA)** y configurar una **alerta de presupuesto** para evitar consumos no deseados en el Free Tier.

---

## 🛡️ ¿Qué es MFA?

El **Multi-Factor Authentication (MFA)** agrega una segunda capa de protección al inicio de sesión. Además de la contraseña, se requiere un código temporal generado por una app autenticadora (como Google Authenticator o Authy).

---

## 💰 ¿Por qué configurar una alerta de facturación?

Aunque la cuenta AWS Free Tier ofrece servicios sin costo, es recomendable establecer un **presupuesto con alertas** para recibir notificaciones si se supera un monto definido (por ejemplo, 1 USD).

---

## 🛠️ Pasos del laboratorio

### 1. Habilitar MFA en la cuenta raíz
1. Inicia sesión en [https://console.aws.amazon.com](https://console.aws.amazon.com) con el usuario raíz.
2. Haz clic en tu nombre (esquina superior derecha) > **"Security Credentials"**.
3. En la sección de **MFA**, haz clic en **"Assign MFA Device"**.
4. Ingresa un nombre de dispositivo MFA.
4. Selecciona **"Authenticator app"** y sigue los pasos:
   - Instala Google Authenticator en tu teléfono.
   - Abre la app autenticadora y escanea el código QR.
   - Ingresa dos códigos generados consecutivamente.
5. Al finalizar, verás que el MFA está habilitado para tu cuenta.
6. Cierra sesión y repite el paso 1.
7. Posteriormente pedirá un código MFA que tendrás que revisar en tu aplicación "Google Authenticator".
8. Luego de ingresar el código podrás iniciar sesión correctamente.

### 2. Crear una alerta de facturación

#### Crear un presupuesto de uso
1. Dirígete a **Billing > Budgets**.
2. Haz clic en **"Create budget"**.
3. Selecciona **'Use a template(simplified)'**.
4. Templates: **'Zero spend budget'** (Crea un presupuesto que te notifique cuando tu gasto supere los $0,01).
5. Nombre: `PresupuestoFreeTier`
6. Correos electrónicos a notificar.
7. Finaliza la creación del presupuesto.

---

## 💡 Buenas prácticas

- Activa MFA también para usuarios IAM.
- Revisa tus notificaciones periodicamente.

---

