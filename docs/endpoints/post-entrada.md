# Endpoint: `POST /entradas/`

Permite crear una nueva entrada.

## Parámetros de URL


## Ejemplo de Solicitud
```http
POST /entradas
```

## Respuesta Exitosa (Parametros de cuerpo JSON)
```json
{
  {
    "materia_prima": "MateriaPrima1",
    "cantidad_total": "100.50",
    "costos_totales": "500.00",
    "fecha": "2023-01-01T00:00:00.000Z",
    "hora": "12:00:00",
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
