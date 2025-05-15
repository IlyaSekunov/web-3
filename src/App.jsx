import { useState, useEffect } from 'react';
import { getAllSuperheroes, getHeroById } from './api/superheroApi';
import HeroesList from './components/HeroesList';
import HeroDetails from './components/HeroDetails';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const data = await getAllSuperheroes();
        setHeroes(data);
        if (data.length > 0) {
          const firstHero = await getHeroById(data[0].id);
          setSelectedHero(firstHero);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  const handleHeroSelect = async (id) => {
    try {
      const hero = await getHeroById(id);
      setSelectedHero(hero);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <h1 className="main-title">Hero Information</h1>
      <div className="app-content">
        <HeroesList 
          heroes={heroes} 
          onHeroSelect={handleHeroSelect} 
          selectedHeroId={selectedHero?.id}
        />
        <HeroDetails hero={selectedHero} />
      </div>
    </div>
  );
}

export default App;