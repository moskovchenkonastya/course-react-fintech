import React from 'react';
export default class updateComponent extends React.Component {
    ComponentUpdate(nextProps) {
      return this.props.status !== nextProps.status || this.props.accounts !== nextProps.accounts;
    }
  
    render() {
      return (<div> {this.props.children} </div>);
    }
} 