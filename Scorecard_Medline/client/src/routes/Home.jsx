import React from 'react';
import Header from '../components/Header';
import AddScorecard from '../components/AddScorecard';
import ScorecardList from '../components/ScorecardList';

function Home() {
  return (
    <div>
      <Header/>
      <AddScorecard/>
      <ScorecardList/>
    </div>
  )
}

export default Home;
