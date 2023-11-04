import React, {useState, createContext} from "react";

export const ScorecardsContext = createContext();

export const ScorecardsContextProvider = (props) => {
    const [scorecards, setScorecards] = useState([]);
    const [selectedScorecard, setSelectedScorecard] = useState(null);
    const addScorecards = (scorecard) => {
        setScorecards ([...scorecards, scorecard]);
    };
    return (
        <ScorecardsContext.Provider 
        value={{
                scorecards, 
                setScorecards, 
                addScorecards,
                selectedScorecard, 
                setSelectedScorecard,
            }}
        >
            {props.children}
        </ScorecardsContext.Provider>
    );
};