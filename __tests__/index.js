import React from 'react';
import renderer from 'react-test-renderer';
import AppContextProvider from "@helpers/appContext";

import Homepage from '../pages/index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AppContextProvider>
        <Homepage />
      </AppContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
