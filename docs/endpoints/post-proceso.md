# Endpoint: `POST /procesos/`

Permite crear un nuevo proceso.

## Parámetros de URL


## Ejemplo de Solicitud
```http
POST /procesos
```

## Respuesta Exitosa (Parametros de cuerpo JSON)
```json
{
  {
    "tiempo_produccion_unitario": 60,
    "cantidad_material_unitario": "5.25",
    "empleado": "Empleado1",
    "fecha": "2023-01-02T00:00:00.000Z",
    "hora": "14:30:00",
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
