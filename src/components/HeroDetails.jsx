function HeroDetails({ hero }) {
  if (!hero) {
    return (
      <div className="hero-details">
        <p>Select a hero to see details</p>
      </div>
    );
  }

  return (
    <div className="hero-details">
      <div className="hero-name-container">
        <h2>{hero.name}</h2>
      </div>
      <div className="hero-details-container">
        <div className="hero-content">
          <img src={hero.images.md} alt={`Hero photo of ${hero.name}`} className="hero-photo" />

          <div className="hero-stats">
            <div className="hero-stats-section">
              <h3>Appearance:</h3>
              <div className="detail-item">
                <span className="detail-label">Gender:</span> {hero.appearance.gender ?? 'Unknown'}
              </div>
              <div className="detail-item">
                <span className="detail-label">Race:</span> {hero.appearance.race ?? 'Unknown'}
              </div>
              <div className="detail-item">
                <span className="detail-label">Height:</span> {hero.appearance.height[1] ?? 'Unknown'}
              </div>
              <div className="detail-item">
                <span className="detail-label">Weight:</span> {hero.appearance.weight[1] ?? 'Unknown'}
              </div>
            </div>

            <div className="hero-stats-section">
              <h3>Powerstats:</h3>
              <div className="detail-item">
                <span className="detail-label">Intelligence:</span> {hero.powerstats.intelligence}
              </div>
              <div className="detail-item">
                <span className="detail-label">Strength:</span> {hero.powerstats.strength}
              </div>
              <div className="detail-item">
                <span className="detail-label">Speed:</span> {hero.powerstats.speed}
              </div>
              <div className="detail-item">
                <span className="detail-label">Durability:</span> {hero.powerstats.durability}
              </div>
              <div className="detail-item">
                <span className="detail-label">Power:</span> {hero.powerstats.power}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDetails;