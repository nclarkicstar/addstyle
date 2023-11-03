import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ScorecardsContext } from '../context/ScorecardsContext';
import ScorecardFinder from '../apis/ScorecardFinder';
import CircleRating from '../components/CircleRating';
import Elements from '../components/Elements';
import AddElement from '../components/AddElement';

const ScorecardDetailPage = () => {
  const {id} = useParams()
  const {selectedScorecard, setSelectedScorecard} = useContext (ScorecardsContext)
  
  useEffect(() => {
    const fetchData = async() => {
      try {
          const response = await ScorecardFinder.get(`/${id}`);

          setSelectedScorecard(response.data.data);
      } catch (err) {
          console.log(err)
      }
 
    };

    fetchData();
  },[]);
    return (
      <div>{selectedScorecard && (
        <>
          <h1>{selectedScorecard.scorecard.name}</h1>
          <div>
              <AddElement/>
          </div>
          <div className='mt-3'>
              <Elements elements={selectedScorecard.elements}/>
          </div>
        </> 
      )}
    </div>
  );
};

export default ScorecardDetailPage;
