# Endpoint: `GET /entradas/{id}`

Permite toda obtener información detallada de una sola entrada.

## Parámetros de URL
```http
{id} (obligatorio): Identificador único que se desea recuperar.
```

## Ejemplo de Solicitud
```http
GET /entradas/{id}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  {
    "id": 1,
    "materia_prima": "MateriaPrima1",
    "cantidad_total": "100.50",
    "costos_totales": "500.00",
    "fecha": "2023-01-01T00:00:00.000Z",
    "hora": "12:00:00",
    "version": 1
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
