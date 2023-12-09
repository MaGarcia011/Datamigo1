# Endpoint: `POST /usuario/`

Permite crear un nuevo usuario.

## Parámetros de URL


## Ejemplo de Solicitud
```http
POST /usuario
```

## Respuesta Exitosa (Parametros de cuerpo JSON)
```json
{
  {
    "nombre": "NombreUsuario",
    "apellidos": "ApellidosUsuario",
    "fecha_nacimiento": "1990-01-01T00:00:00.000Z",
    "foto": "ruta_foto.jpg",
    "correo": "usuario@example.com",
    "contraseña": "contrasena123"
  },
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  {
    "status": 201, 
    "message": "Created"
  },
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 400,
    "error": "bad_request"
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 
