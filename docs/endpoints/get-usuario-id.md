# Endpoint: `GET /usuario/{id}`

Permite toda obtener información detallada de un solo usuario.

## Parámetros de URL
```http
{id} (obligatorio): Identificador único que se desea recuperar.
```

## Ejemplo de Solicitud
```http
GET /usuario/{id}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  {
    "id": 1,
    "nombre": "NombreUsuario",
    "apellidos": "ApellidosUsuario",
    "fecha_nacimiento": "1990-01-01T00:00:00.000Z",
    "foto": "ruta_foto.jpg",
    "correo": "usuario@example.com",
    "contraseña": "contrasena123"
  }
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró."
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
