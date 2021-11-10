// Fichier pour les outils que l'on va utiliser dans le projet et que l'on peut externaliser

export default function SearchEvents({
  searchValue,
  handleChangeSearch,
  handleIsChanged,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="rechercher"
        value={searchValue}
        onChange={(e) => handleChangeSearch(e.target.value)}
      />
      <button type="submit" onClick={() => handleIsChanged(true)}>
        Search
      </button>
    </div>
  );
}
