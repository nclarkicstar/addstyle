import React, {useContext, useEffect}from 'react';
import ScorecardFinder from '../apis/ScorecardFinder';
import { ScorecardsContext } from '../context/ScorecardsContext';
import { useNavigate } from "react-router-dom";

const ScorecardList = () => {
    const {scorecards, setScorecards} = useContext(ScorecardsContext)
    const navigate = useNavigate(); 
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await ScorecardFinder.get("/")
            setScorecards(response.data.data.scorecards);
        } catch (err) {}
    };

    fetchData()
// eslint-disable-next-line
},[]);

const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
        // eslint-disable-next-line
        const response = await ScorecardFinder.delete(`/${id}`);
        setScorecards(
            scorecards.filter(scorecard => {
            return scorecard.id !== id;
            })
        ); 
    } catch (err) {
        console.log(err);
    }
};

const handleUpdate = (e,id) => {
    e.stopPropagation();
    navigate(`/scorecards/${id}/update`);
};

const handleScorecardSelect = (id) => {
    navigate(`/scorecards/${id}`);
}

  return (
    <div className='list-group'>
        <table className='table table-hover table-light'>
            <thead>
                <tr className='bg-primary'>
                    <th scope = 'col'>NAME</th>
                    <th scope = 'col'>DESCRIPTION</th>
                    <th scope = 'col'>CREATED</th>
                    <th scope = 'col'>EDIT</th>
                    <th scope = 'col'>DELETE</th>
                </tr>
            </thead>
            
            <tbody>
                {scorecards && scorecards.map((scorecard) => {
                    return (
                        <tr onClick={() => handleScorecardSelect(scorecard.id)} key={scorecard.id}>
                            <td>{scorecard.name}</td>
                            <td>{scorecard.description}</td>
                            <td>{scorecard.created}</td>
                            <td><button onClick={(e) => handleUpdate(e, scorecard.id)} className='btn btn-warning'>Next</button></td>
                            <td><button onClick={(e) => handleDelete(e, scorecard.id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    );
                })}
            </tbody> 
        </table>
    </div>
  )
}

export default ScorecardList;
