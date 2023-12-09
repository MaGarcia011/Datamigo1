# Endpoint: `GET /procesos/{id}`

Permite toda obtener información detallada de un solo proceso.

## Parámetros de URL
```http
{id} (obligatorio): Identificador único que se desea recuperar.
```

## Ejemplo de Solicitud
```http
GET /procesos/{id}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
   {
    "id": 1,
    "tiempo_produccion_unitario": 60,
    "cantidad_material_unitario": "5.25",
    "empleado": "Empleado1",
    "fecha": "2023-01-02T00:00:00.000Z",
    "hora": "14:30:00",
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
