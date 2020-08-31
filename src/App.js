import React from 'react';
import './App.scss';
import {fetchInfo} from './data/data';
import Accordion from  './components/Accordion';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allServices: [],
      allCategories: []
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    fetchInfo().then(services => 
      this.setState({
        allServices: services.value.map((service) => {
          return {
            serviceCategoryId: service.ServiceCategory.Id,
            serviceId: service.Id,
            serviceFree: service.Free,
            serviceCaption: service.Caption
          };
        }),
        allCategories: [...new Map(services.value.map(item => [item.ServiceCategory.Id, item.ServiceCategory])).values()]
      }))
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="app__container">
          <Accordion
            allCategories = {this.state.allCategories}
            allServices = {this.state.allServices}
          />
      </div>
    );
  }
};
export default App;
