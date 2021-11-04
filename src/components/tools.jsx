// Fichier pour les outils que l'on va utiliser dans le projet et que l'on peut externaliser

export default function SearchEvents({
  searchValue,
  handleChangeSearch,
  isSend,
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
      <input
        type="submit"
        onSubmit={() => handleIsChanged(!isSend)}
        value="Search"
      />
    </div>
  );
}
