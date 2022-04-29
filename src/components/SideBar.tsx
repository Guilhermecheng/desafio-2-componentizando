import { memo, useCallback } from "react";
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

const SideBarComponent = ({ genres, genreId, changeGenreId }: GenreProps) => {
	
	return (
		<nav className="sidebar">
			<span>Watch<p>Me</p></span>

			<div className="buttons-container">
				{genres.map(genre => (
				<Button
					key={String(genre.id)}
					title={genre.title}
					iconName={genre.name}
					onClick={() => changeGenreId(genre.id)}
					selected={genreId === genre.id}
				/>
				))}
			</div>
		</nav>
	)
}

export const SideBar = memo(SideBarComponent);