const articulos = [
  {
    titulo: "La Inteligencia Artificial en 2025",
    resumen: "La evolución de la IA está transformando sectores enteros, desde salud hasta educación.",
    imagen: "https://apd-images.imgix.net/uploads/sites/2/2021/01/ramas_ia_1.jpg?auto=compress%2Cformat&crop=edges&fit=crop&ixlib=php-1.1.0&w=900&s=0655022506ec76e0f2e64d5735c1465f"
  },
  {
    titulo: "5 Lenguajes de Programación que Dominarán la Próxima Década",
    resumen: "Python, JavaScript, Go y más. Descubre cuáles liderarán la innovación tecnológica.",
    imagen: "https://altavoz.com.ar/wp-content/uploads/2019/12/Programming-Language-Popularity.jpg"
  },
  {
    titulo: "Realidad Aumentada: Aplicaciones más allá del entretenimiento",
    resumen: "Desde cirugías hasta educación, la RA está impactando el mundo real.",
    imagen: "https://img.itmastersmag.com/wp-content/uploads/2023/08/03202511/realidad-aumentada.jpg"
  }
];

const contenedor = document.getElementById("blog-container");

articulos.forEach(articulo => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${articulo.imagen}" class="card-img-top" alt="${articulo.titulo}">
      <div class="card-body">
        <h5 class="card-title">${articulo.titulo}</h5>
        <p class="card-text">${articulo.resumen}</p>
      </div>
    </div>
  `;

  contenedor.appendChild(col);
});
