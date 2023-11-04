import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScorecardsContext } from '../context/ScorecardsContext';
import ScorecardFinder from '../apis/ScorecardFinder';

const UpdateScorecard = (props) => {
    const {id} = useParams();
    const navigate = useNavigate(); 
    const {scorecards} = useContext(ScorecardsContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await ScorecardFinder.get(`/${id}`);
            console.log(response.data.data);
            setName(response.data.data.scorecard.name);
            setDescription(response.data.data.scorecard.description);
            
        };

        fetchData();
    },[]);
  
    const handleSubmit = async(e) => {
        e.preventDefault()
        const updatedScorecard = await ScorecardFinder.put(`/${id}`,{
            name,
            description,
        });
        console.log(updatedScorecard);
        navigate (`/`);
    }
    
  return <div>
{/*<h1>{scorecards[0].name}</h1>*/}
    <form action=''>
        <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input value={name} onChange={e => setName(e.target.value)} id='name' className='form-control' type='text'/>
        </div>

        <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <input value={description} onChange={e => setDescription(e.target.value)} id='description' className='form-control' type='text'/>
        </div>
        <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
    </form>
  </div>;
};

export default UpdateScorecard;
