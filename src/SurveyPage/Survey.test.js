import React from "react";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{mount} from 'enzyme';
Enzyme.configure({adapter: new Adapter()}); 
import Survey from "./Survey";

describe("Survey", () => {
  let wrapper;
  let useEffect;
  
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect").mockImplementation(() => []);
    
    wrapper = shallow(<Survey />);
  });

  describe("On Load", () => {
    it("Check if useEffect is called", () => {
      expect(useEffect).toHaveBeenCalled();
    });
    
    it("Check if SurveyList is renedered", () => {
      const firstSurveyList = wrapper.find("SurveyList").first();

      expect(Array.isArray(firstSurveyList.prop("surveys"))).toEqual(true);
      expect(firstSurveyList.prop("surveys").length).toEqual(0)
    });

    global.fetch.mockClear();
      
  });
    
});


