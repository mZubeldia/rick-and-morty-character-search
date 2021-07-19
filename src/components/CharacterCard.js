import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  console.log(props.characterData.species);
  const humanIcon = <i className="fas fa-universal-access species-icon"></i>;
  const alienIcon = <i className="fab fa-reddit-alien species-icon"></i>;

  const speciesIcon = () => {
    if (props.characterData.species === "Alien") {
      return alienIcon;
    } else if (props.characterData.species === "Human") {
      return humanIcon;
    }
  };

  return (
    <Link to={`/character/${props.characterData.id}`}>
      <article className="character__list-item">
        <img
          className="character-pic"
          src={props.characterData.picture}
          alt={props.characterData.name}
        />

        <h2 className="character-name">{props.characterData.name}</h2>
        <p className="character-species">{speciesIcon()}</p>
      </article>
    </Link>
  );
};

export default CharacterCard;
