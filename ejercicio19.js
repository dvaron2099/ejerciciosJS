


function misPeliculas(peliculas) {
  for (const pelicula of peliculas) {
    let para_mostrar = `${pelicula.titulo} de ${pelicula.director}`
    if (pelicula.vista) {
      console.log(`Me he visto ${para_mostrar}`);
    } else {
      console.log(`Me falta por ver ${para_mostrar}`);
    }
  }
}

const peliculas = [
  {
    titulo: "El señor de los anillos",
    director: "Peter Jackson",
    vista: true
  },
  {
    titulo: "La Liga de la Justicia",
    director: "Zack Snyder",
    vista: false
  },
  {
    titulo: "Los Vengadores: Endgame",
    director: "Joe Russo",
    vista: true
  },
  {
    titulo: "Batman vs Superman",
    director: "Zack Snyder",
    vista: false
  }
]

misPeliculas(peliculas)
