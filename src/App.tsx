import React from 'react';
import { Provider } from 'react-redux';
import NavComponent from './components/NavComponent/NavComponent'
import ContentComponent from './components/ContentComponent/ContentComponent'
import MobileNav from './components/MobileNav/MobileNav';
import './App.scss';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="mobileNav">
          <MobileNav />
        </div>
        <div className="d-flex">
          <div className="aside">
            <NavComponent />
          </div>
          <div>
            <ContentComponent 
              articles={[]}
              feed=""
              error=""
            /> 
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
