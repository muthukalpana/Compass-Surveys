import React from "react";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{mount} from 'enzyme';
Enzyme.configure({adapter: new Adapter()}); 
import SurveyList from "./SurveyList";

describe("Survey List", () => {
  
  let wrapper;
  let useEffect;
  let props;
  const survey1 = { id: 1, name: "Survey 1",questions: null  };
  const survey2 = { id: 2, name: "Survey 2",questions: null  };
  const mockSurveys = [survey1, survey2];
  
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

    wrapper = shallow(<SurveyList surveys={mockSurveys} />);
  });

  describe("On Load", () => {
    
    it("Check the Number Of Surveys", () => {
      expect(wrapper.find("button")).toHaveLength(2);

    });

    global.fetch.mockClear();
      
  });
    
});


