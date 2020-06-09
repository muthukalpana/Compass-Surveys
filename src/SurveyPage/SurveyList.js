import React from 'react';
import Question from './Question';


const SurveyList = (props) => {
    const [questions, setQuestions] = React.useState([]);
    const [isButtonClick, setIsButtonClick] = React.useState(false);
    const [pageName, setPageName] = React.useState('Surveys Page');

    const [url, setUrl] = React.useState('');

    function handleClickOpen(event, item) {
        setUrl(process.env.REACT_APP_URL+item.id);
        setPageName('Survey Question Page');
        setIsButtonClick(true);
      }

    const callBack = () => {
        setUrl(process.env.REACT_APP_URL);
        setIsButtonClick(false);
    }

    React.useEffect(() => {
        fetch(url)
        .then(questionResult => questionResult.json())
        .then(questionResultJSON => {
        setQuestions(questionResultJSON);
        })
        .catch(error => console.log(error))
        
    }, [url])
    
    let survey = props && props.surveys != null && !isButtonClick? 
    <div className="divPage">
        <label className="lblSurvey">Compass Surveys</label>
    {props.surveys.map((e,i) => 
    (
        <div key={i}>
            <button type="button" className="btnSurvey" key={e.id} onClick={event => handleClickOpen(event, e)}>{e.name}</button>
            <br/><br/><br/>
        </div>
    ))} </div> : <Question showModal={isButtonClick}  questionsResult={questions} parentCallBack={callBack}/>;
    
    return(
        <div className="divOuter">
            <h3>{pageName}</h3>
            <hr/><br/>
            {survey}
        </div>
    );
  }


export default SurveyList;