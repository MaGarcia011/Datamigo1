# Endpoint: `GET /analisis/`

Permite toda obtener información detallada de todos los análisis.

## Parámetros de URL


## Ejemplo de Solicitud
```http
GET /analisis
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  {
    "id": 1,
    "id_entrada": 2,
    "id_proceso": 1,
    "id_salida": 1,
    "id_reporte": 1,
    "version": 1
  },
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
