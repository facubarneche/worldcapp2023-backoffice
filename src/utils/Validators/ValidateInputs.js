export class ValidateInputs {
  constructor() {
    // Puedes inicializar cualquier configuración de validación aquí
  }

  static isEmpty = (value) => String(value).trim() === ''

  static isAddress = (value) => /.*\s\d+$/.test(value)
}
