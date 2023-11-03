import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import ScorecardDetailPage from './routes/ScorecardDetailPage';
import UpdatePage from './routes/UpdatePage';
import { ScorecardsContextProvider } from './context/ScorecardsContext';

const App = () => {
    return ( 
        <ScorecardsContextProvider>
             <div className='container'>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/scorecards/:id" element={<ScorecardDetailPage />} />
                        <Route exact path="/scorecards/:id/update" element={<UpdatePage />} />
                    </Routes>
                </Router>
            </div>
        </ScorecardsContextProvider>
    );
};

export default App;
