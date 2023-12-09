# Endpoint: `GET /salidas/`

Permite toda obtener información detallada de todos los procesos.

## Parámetros de URL


## Ejemplo de Solicitud
```http
GET /salidas
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    {
    "id": 1,
    "cantidad_producida": "80.75",
    "costo_por_unidad": "8.50",
    "merma": "2.25",
    "valor_venta": "15.00",
    "fecha": "2023-01-03T00:00:00.000Z",
    "hora": "08:45:00",
    "version": 1
  },
  {
    
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
