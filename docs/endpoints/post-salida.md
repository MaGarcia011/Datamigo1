# Endpoint: `POST /salidas/`

Permite crear una nueva salida.

## Parámetros de URL


## Ejemplo de Solicitud
```http
POST /salidas
```

## Respuesta Exitosa (Parametros de cuerpo JSON)
```json
{
  {
    "cantidad_producida": "80.75",
    "costo_por_unidad": "8.50",
    "merma": "2.25",
    "valor_venta": "15.00",
    "fecha": "2023-01-03T00:00:00.000Z",
    "hora": "08:45:00",
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
