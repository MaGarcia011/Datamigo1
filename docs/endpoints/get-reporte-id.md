# Endpoint: `GET /reportes/{id}`

Permite toda obtener información detallada de un solo reporte.

## Parámetros de URL
```http
{id} (obligatorio): Identificador único que se desea recuperar.
```

## Ejemplo de Solicitud
```http
GET /reportes/{id}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
{
    "id": 1,
    "path": "/ruta_del_reporte/report1.pdf",
    "version": 1,
    "fecha": "2023-01-04T00:00:00.000Z",
    "hora": "10:00:00"
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
