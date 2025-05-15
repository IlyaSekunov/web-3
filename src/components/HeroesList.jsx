import HeroCard from './HeroCard';

function HeroesList({ heroes, onHeroSelect, selectedHeroId }) {
  return (
    <div className="heroes-list">
      <div className="heroes-list-container">
        {heroes.map(hero => (
          <HeroCard
            key={hero.id}
            hero={hero}
            isSelected={hero.id === selectedHeroId}
            onSelect={() => onHeroSelect(hero.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroesList;