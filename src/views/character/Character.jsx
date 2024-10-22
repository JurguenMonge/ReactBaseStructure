// Libraries
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

// API
import { getCharacter } from "../../service/CharactersAPI";

//CSS
import "../../assets/css/character.css";

export default function Character() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacter,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <ul>
        {data.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
      <Link to="/" className="link">
        Back
      </Link>
    </>
  );
}
