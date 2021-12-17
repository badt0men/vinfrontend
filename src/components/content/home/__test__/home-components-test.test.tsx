import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import { Header } from '../../../common/header/Header';
import Benefit from '../Benefit';
import HeroSection from '../HeroSection';
import HistoryReport from '../HistoryReport';
import WhatWeOffer from '../WhatWeOffer';

describe("Homepage Test", () => {
  const header = shallow(<Header />);
  const hero = shallow(<HeroSection />);
  const history = shallow(<HistoryReport />);
  const what_we_offer = shallow(<WhatWeOffer />);
  const benefits = shallow(<Benefit />);
  test("should render all 5 componenets correctly", () => {
      expect(header).toMatchSnapshot()
      expect(hero).toMatchSnapshot()
      expect(history).toMatchSnapshot()
      expect(what_we_offer).toMatchSnapshot()
      expect(benefits).toMatchSnapshot() 
  
  })
})

