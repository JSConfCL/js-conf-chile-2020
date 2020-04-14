import React, { Component } from "react";
import PropTypes from "prop-types";

const AppContext = React.createContext();
const { Provider, Consumer } = AppContext;

class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      isLoaderOpen: false,
    };
    this.openLoader = this.openLoader.bind(this);
    this.closeLoader = this.closeLoader.bind(this);
  }

  openLoader() {
    this.setState({
      isLoaderOpen: true,
    });
  }

  closeLoader() {
    this.setState({
      isLoaderOpen: false,
    });
  }

  render() {
    const { children } = this.props;
    const { isLoaderOpen } = this.state;
    const { openLoader, closeLoader } = this;

    return (
      <Provider
        value={{
          // values
          isLoaderOpen,

          // callbacks
          openLoader,
          closeLoader,
        }}
      >
        {children}
      </Provider>
    );
  }
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
export { AppContext, Consumer };
