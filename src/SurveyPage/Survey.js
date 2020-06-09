import React from 'react';
import SurveyList from './SurveyList';
import Question from './Question';
import './Survey.scss';


const Survey = () =>
{
    const [surveys, setSurveys] = React.useState([]);
    const [isButtonClick, setIsButtonClick] = React.useState(false);
    
    function callback(isClick)
    {
        setIsButtonClick(isClick);
    }
    
    React.useEffect(() => {
        fetch(process.env.REACT_APP_URL)
        .then(surveyResult => surveyResult.json())
        .then(surveyResultJSON => {
        setSurveys(surveyResultJSON)
      })
      .catch(error => console.log(error));
      }, []); 
 
    return(
        <div>
            <SurveyList surveys={surveys} />
            
        </div>
    );
}

export default Survey;