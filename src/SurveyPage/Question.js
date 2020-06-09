import React from 'react';
import {Constants} from './Constants'

const Question = (props) => 
{
    let btnBack = <div>
                    <button className="btnBack" onClick={()=> {props.parentCallBack();}}>Back</button>
                  </div>;

    function subTitle(subTitleValue)
    {
        return subTitleValue != null ? <label className="lblQuestion"><br/>{subTitleValue}<br/></label>:<br/>;
    }

    function getQuestionType(questionType)
    {
        return Constants(questionType);
    }

    let question = props && props.questionsResult != null && props.questionsResult.questions != null ?
    <div className="divQuestion">
    <label className="lblSurvey">{props.questionsResult.name}</label>
    {props.questionsResult.questions.map((e,i) => 
    (
        <div key={i} className="divQuesOpt">
            <label className="lblQuestion">{e.title}</label>
            {subTitle(e.subTitle)}
            {e.options.map((option) =>
                (
                    <div key={option.id}>
                        <label className="lblQuestion">
                            <input type={getQuestionType(e.type)} key={option.id} value={option.id} name={'option'+i} />
                            {option.name}
                        </label>
                        <br/>
                    </div>
                )
            )}
        </div>
    ))}
        {btnBack}<br/>
</div> : <div className="divQuestion"><div  className="lblNoQuestion"><span>No Questions set. </span></div><br/>
            {btnBack}
            </div>;
    
    

    return(
        <div className="divPage">
            {question}
            
        </div>
    )
}

export default Question;