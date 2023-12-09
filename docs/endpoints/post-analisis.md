# Endpoint: `POST /analisis/`

Permite crear un nuevo análisis.

## Parámetros de URL


## Ejemplo de Solicitud
```http
POST /analisis
```

## Respuesta Exitosa (Parametros de cuerpo JSON)
```json
{
  {
    "id_entrada": 2,
    "id_proceso": 1,
    "id_salida": 1,
    "id_reporte": 1,
    "version": 1
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
