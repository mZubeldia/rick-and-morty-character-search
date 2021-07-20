const FilterBySpecies = (props) => {
  const handleSpecies = (ev) => {
    //función para pasar los datos limpios a App
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };

  return (
    <>
      <select name="species" id="species" onChange={handleSpecies}>
        <option value="">Select species</option>
        <option value="alien">Alien</option>
        <option value="human">Human</option>
      </select>
    </>
  );
};

export default FilterBySpecies;
