import React from 'react';
import CircleRating from './CircleRating';

const Elements = ({elements}) => {
    return (
        <div className='row row-cols-1 mb-2'>
            {elements.map((element) => {
                return (
                    <div key={element.id} 
                    className="card" 
                    style={{maxWidth: "70%"}}
                    >
                    <div className='card-header d-flex justify-content-between'>
                        <span><strong>{element.weight}</strong></span>
                        <span>
                            <CircleRating rating={element.weight}/>
                        </span>
                        </div>
                <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.description}</p>
                    <a href="#" className="btn btn-primary">Scoring options</a>
                </div>
            </div> 
        );   
    })};




            {/*<div className="card" style={{maxWidth: "70%"}}>
                <div className='card-header d-flex justify-content-between'>
                    <strong>Internat Audit Risk Potential</strong>
                    <span><strong>25%</strong></span>
                    <span>
                        <CircleRating rating={25}/>
                    </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Hosted Environment</h5>
                    <p className="card-text">Addresses internal/external policies & procedures, certifications, legal; regulatory and statutory matters affecting system operations and legal obligations.</p>
                    <a href="#" className="btn btn-primary">Scoring options</a>
                </div>
            </div>    

            <div className="card" style={{maxWidth: "70%"}}>
                <div className='card-header d-flex justify-content-between'>
                    <strong>Internat Audit Risk Potential</strong>
                    <span><strong>50%</strong></span>
                    <span>
                        <CircleRating rating={50}/>
                    </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Previous Audits</h5>
                    <p className="card-text">Addresses interval since last audit/inspection; previous audit findings; concerns.</p>
                    <a href="#" className="btn btn-primary">Scoring Options</a>
                </div>
            </div>    

            <div className="card" style={{maxWidth: "70%"}}>
                <div className='card-header d-flex justify-content-between'>
                    <strong>Internat Audit Risk Potential</strong>
                    <span><strong>25%</strong></span>
                    <span>
                        <CircleRating rating={25}/>
                    </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Fraud potential</h5>
                    <p className="card-text">Addresses misrepresentation of facts; misappropriation of assets; falsification; alteration of documents; omission on documents; segregation of duties; potential business exposure; size/mix of transactions can affect risk of potential financial loss; lack of audit trail</p>
                    <a href="#" className="btn btn-primary">Scoring options</a>
                </div>
            </div>*/}    

        </div>  
    );
};

export default Elements;
