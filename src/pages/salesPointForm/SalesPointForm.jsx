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
    },
    {
      type: 'checkbox',
      label: 'Onfire', 
    }
  ]

  return (
    <>
      <ItemFormBuilder inputs={inputs} />
    </>
  )
}

export default SalesPointForm