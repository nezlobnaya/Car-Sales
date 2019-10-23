import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';
import { Button } from 'react-bulma-components';

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <Button color="success" size="medium" rounded outlined onClick=
      {() => props.addFeature(props.feature)}>Add</Button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
