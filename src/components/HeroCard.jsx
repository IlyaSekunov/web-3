function HeroCard({ hero, isSelected, onSelect }) {
  return (
    <div 
      className={`hero-card ${isSelected ? 'active' : ''}`}
      onClick={onSelect}
    >
      <h3>{hero.name}</h3>
    </div>
  );
}

export default HeroCard;