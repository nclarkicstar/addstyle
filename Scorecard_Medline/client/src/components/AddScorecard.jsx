import React, { useContext, useState } from 'react';
import ScorecardFinder from '../apis/ScorecardFinder';
import { ScorecardsContext } from '../context/ScorecardsContext';

const AddScorecard = () => {
    const { addScorecards } = useContext(ScorecardsContext); // Access the addScorecards function from the context
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ScorecardFinder.post("/", {
                name,
                description,
            });
            addScorecards(response.data.data.scorecard);

            // Clear the form fields
            setName("");
            setDescription("");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='mb-4'>
            <form action=''>
                <div className='form-row'>
                    <div className='col'>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className='form-control'
                            placeholder='name'
                        />
                    </div>
                    <div>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            className='form-control'
                            placeholder='description'
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmit} type="submit" className='btn btn-primary'>
                            Create Scorecard
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddScorecard;

