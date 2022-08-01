import React from 'react';
import { Link } from 'react-router-dom';

function LandingPageButton() {
  return (
    <Link to="/about" class="nav-link">
      <button type="button" className="btn btn-primary">
        <span style={{ 'font-size': '24px' }}>Sign Up!</span>
      </button>
    </Link>
  );
}

function LandingFrameMessage() {
  const style = {
    margin: 'auto',
    padding: '10% 35% 10% 15%',
    color: 'black',
  };
  return (
    <div style={style}>
      <div style={{ 'font-size': '76px' }}>Drug Interaction checker!</div>
      <div style={{ 'font-size': '36px' }}>
        Analyze prescription and OTC drug interactions to determine which drug
        combinations your patients should avoid. Pregnant patients are
        especially important to consider.
      </div>
      {' '}
      <br />
      <LandingPageButton />
      {' '}
    </div>
  );
}

function LandingFrame() {
  const style = {
    'background-image': 'url("./background.jpg")',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
  };
  return (
    <div style={style}>
      <LandingFrameMessage />
    </div>
  );
}
function HomePage() {
  return (
    <div>
      <LandingFrame />
    </div>
  );
}
export default HomePage;
