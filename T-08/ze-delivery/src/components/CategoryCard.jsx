function CategoryCard({ imagem, texto }) {
    return (
      <div className="category-card">
        <img src={imagem} alt={texto} />
        <p>{texto}</p>
      </div>
    );
  }
  
  export default CategoryCard;
  