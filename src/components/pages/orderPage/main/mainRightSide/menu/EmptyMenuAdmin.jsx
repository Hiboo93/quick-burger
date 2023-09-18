
export default function EmptyMenuAdmin({ onReset }) {
  return (
    <div>
        <span>Pas de produit</span>
        <button onClick={onReset}>Générer de nouveau produits</button>
    </div>
  )
}
