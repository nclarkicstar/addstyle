import React, { useState } from 'react';
import ScorecardFinder from '../apis/ScorecardFinder';
import { useLocation } from 'react-router-dom';


const AddElement = () => {
        const location = useLocation ()
    const [name, setName] = useState("")
    const [elementText, setElementText] = useState("")
    const [weight, setWeight] = useState("")

    const handleSubmitElement = (e) => {
        e.preventDefault()
        //ScorecardFinder.post()
    }
    return (
        <div className='mb-2'>
        <form action="">
            <div className="form-row">
                <div className="form-group col-8">
                    <label htmlFor="name">Name</label>
                    <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name" 
                        placeholder="name" 
                        type="text" 
                        className="form-control"
                    />
                </div>
                <div className="form-group col-4">
                    <label htmlFor="weight">Total Weight</label>
                    <select 
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        id="weight"   
                        className="custom-select"
                    >
                        <option disabled>Total Weight</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                        <option value="25">25%</option>
                        <option value="30">30%</option>
                        <option value="35">35%</option>
                        <option value="40">40%</option>
                        <option value="45">45%</option>
                        <option value="50">50%</option>
                        
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="Description" >Description</label>
                <textarea 
                    value={elementText}
                    onChange={e => setElementText(e.target.value)}
                    id="description" 
                    className="form-control" 
                    style={{maxWidth: "70%"}}>
                </textarea>
            </div>
            <button type='submit' onClick={handleSubmitElement} className="btn btn-warning">Add elements</button>
        </form>
        </div>
    );
};

export default AddElement;
