import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/src/components/AttractionOverview.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
