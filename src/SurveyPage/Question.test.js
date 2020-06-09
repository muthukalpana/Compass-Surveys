import React from "react";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{mount} from 'enzyme';
Enzyme.configure({adapter: new Adapter()}); 
import Question from "././Question";

describe("Survey List", () => {
  
  let wrapper;
  const survey1 = {"id":1,"name":"Survey 1","questions":[{"id":1,"createdBy":"Admin","createdDate":"04 JUN 2020","title":"What is your Favourite Color?","subTitle":null,"surveyId":1,"options":[{"id":1,"name":"Red","questionId":1},{"id":2,"name":"Orange","questionId":1},{"id":3,"name":"Green","questionId":1}]}]};
  
  const mockSurveys = [survey1];
  const isButtonClick = true;
  
  beforeEach(() => {
    wrapper = shallow(<Question showModal={isButtonClick}  questionsResult={survey1} />);
  });

  describe("On Load", () => {
    
    it("Number Of Options", () => {
      expect(wrapper.find("input")).toHaveLength(3);
    });

    global.fetch.mockClear();
      
  });
    
});


