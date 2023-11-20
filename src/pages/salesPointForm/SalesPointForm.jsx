import ItemFormBuilder from "src/components/itemFormBuilder/ItemFormBuilder"

const SalesPointForm = () => {
  const inputs = [
    {
      type: 'text',
      label: 'Nombre',
    },
    {
      type: 'number',
      label: 'Coordenadas X',
    },
    {
      type: 'select',
      label: 'Punto de venta',
      options: ['Kiosko', 'Librería', 'Supermercado'],
      defaultValue: "Kiosko"
    }
  ]

  return (
    <>
      <ItemFormBuilder inputs={inputs} />
    </>
  )
}

export default SalesPointForm