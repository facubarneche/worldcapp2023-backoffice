export class GentTestId {
  static generate(string) {
    const resultado = string.toLowerCase().replace(/\s/g, '')
    return resultado
  }
}