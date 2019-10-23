import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (state) => {
 
  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps= (state) => ({
  additionalPrice: state.additionalPrice,
  car: state.car,
  additionalFeatures: state.additionalFeatures
});

export default connect(mapStateToProps)(App);
