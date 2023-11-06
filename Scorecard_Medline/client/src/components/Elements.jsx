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
        </div>  
    );
};

export default Elements;
