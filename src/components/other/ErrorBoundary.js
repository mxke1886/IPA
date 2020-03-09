import React, { Component, Fragment } from 'react';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <Fragment>
          <h3>Es scheint als wäre ein Fehler aufgetreten</h3>
          <h4>Bitte versuchen Sie es später nochmals</h4>
        </Fragment>
      );
    }
    return this.props.children;
  }  
}
export default ErrorBoundary;