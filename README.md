# desafio-2-componentizandoreturn (
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
Desafio 2 Ignite - Componentes

## The Challenge
Divide the main file into components: Content and SideBar.

## The code
### Main file

### App
```javascript
return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>      
      <SideBar genres={genres} genreId={selectedGenreId} changeGenreId={setSelectedGenreId} />
      <Content selectedGenre={selectedGenre} movies={movies}  />      
    </div>
  )
```

### Content
```javascript
return (
	<div className="container">
		<header>
			<span className="category">Categoria:<span> {selectedGenre.title}</span></span>
		</header>

		<main>
			<div className="movies-list">
			{movies.map(movie => (
				<MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
			))}
			</div>
		</main>
	</div>
)
```

### Side bar
```javascript


```
