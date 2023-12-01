export class ValidateInputs {
  constructor() {
    // Puedes inicializar cualquier configuración de validación aquí
  }

  static isEmpty = (value) => String(value).trim() === ''

  static isAddress = (value) => /^[a-zA-Z]+\s\d+$/.test(value)
}
