import React from 'react';

export default class Order extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      price: '',
      type: ''
    };
  }

  formClear() {
    this.setState({
      title: '',
      price: '',
      type: ''
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.handleValidate()) {
      this.props.handleSubmit(this.state);
    }
    this.formClear();
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleValidate() {
    let ok = true;
    for (var i in this.state) {
      ok = ok && this.state[i] !== '';
    }
    return ok;
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" name='title' value={this.state.title} onChange={this.handleInputChange} placeholder='Название' />
      <input type="text" name='price' value={this.state.price} onChange={this.handleInputChange} placeholder='Цена' />
      <input type="text" name='type' value={this.state.type} onChange={this.handleInputChange} placeholder='Тип' />
      <button type='submit'>Отправить</button>
    </form>
  }
}
