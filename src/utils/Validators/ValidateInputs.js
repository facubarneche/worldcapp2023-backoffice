export class ValidateInputs {
  constructor() {
    // Puedes inicializar cualquier configuración de validación aquí
  }

  static isNotEmpty(value) {
    return value.trim() !== ''
  }
}

