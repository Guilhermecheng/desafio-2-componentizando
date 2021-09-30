import { Button } from "./Button";

interface GenreProps {
	genres: Array<{
		id: number;
		name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
		title: string;
	}>;
	genreId: number;
	changeGenreId: (genreId: number) => number | void;
}

export function SideBar({ genres, genreId, changeGenreId }: GenreProps) {

  function handleClickButton(id: number) {
    // setSelectedGenreId(id);
	changeGenreId(id);
  }

	return (
		<nav className="sidebar">
			<span>Watch<p>Me</p></span>

			<div className="buttons-container">
				{genres.map(genre => (
				<Button
					key={String(genre.id)}
					title={genre.title}
					iconName={genre.name}
					onClick={() => handleClickButton(genre.id)}
					// selected={selectedGenreId === genre.id}
					selected={genreId === genre.id}
				/>
				))}
			</div>
		</nav>
	)
}