# desafio-2-componentizando
Desafio 2 Ignite - Componentes

## The Challenge
Divide the main file into components: Content and SideBar.

## The code
### Main file before
```javascript
return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
```
## After
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

```
