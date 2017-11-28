import React from 'react';
<<<<<<< HEAD
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import FormField from '../components/FormField/FormField';
import FormText from '../components/FormText/FormText';

/*
export default () => (
  <div>
    <h2>Создание аккаунта</h2>
    <p>Здесь мы будем создавать новые счета</p>
  </div>
);
*/
=======
import { connect } from 'react-redux'

import Button from '../components/Button/Button';
import FormField from "../components/FormField/FormField";
import FormText from "../components/FormText/FormText";
import Form from "../components/Form/Form";
import { updateFirebaseAction } from "../middleware/updateFirebase";
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486

const validateRequire = value => !value;

class CreateAccount extends React.Component {
<<<<<<< HEAD
  
=======
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      currency: '',
      description: ''
    };
<<<<<<< HEAD
  } 


  validationsForm() {  
    let status = true
    Object.keys(this.state).forEach(item => {
      if(validateRequire(this.state[item])) {
        status = false;
        return status;
=======
  }

  formClear() {
    this.setState({
      name: '',
      currency: '',
      description: ''
    });
  }

  validationsForm() {
    let status = true;

    Object.keys(this.state).forEach(item => {
      if(validateRequire(this.state[item])) {
        status = false;
        return false;
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486
      }
    });

    return status;
  }

<<<<<<< HEAD
  formClear() {
    this.setState({
      name: '',
      currency: '',
      description: ''
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.validationsForm()) {
      this.props.createAccount(this.state);
      this.formClear();
    } else {
      return 
    }
  };

  handleInputChange = event => {
=======
  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validationsForm()) {
      return;
    }

    this.props.createAccount(this.state);

    this.formClear();
  };

  handleInputChange = (event) => {
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486
    this.setState({
      [event.target.name]: event.target.value
    });
  };

<<<<<<< HEAD
  render() { 

    return (<div>
      <h2>Создание аккаунта</h2>
      <Form onSubmit={this.handleSubmit}>
        <FormField label="Название" name="name">
          <FormText value={ this.state.name } name="name" onChange={this.handleInputChange} />
        </FormField>

        <FormField label="Валюта" name="currency">
          <FormText value={ this.state.currency}  name="currency" onChange={this.handleInputChange} />
        </FormField>

        <FormField label="Описание" name="descriprion">
          <FormText value={ this.state.description } name="description" onChange={this.handleInputChange} />
        </FormField>
        <br />
        <Button type="submit">Отправить</Button>
      </Form>
    </div>)
  };

}
export default CreateAccount;
=======
  render() {
    return <div>
      <h2>Добавить новый счет</h2>

      <Form onSubmit={this.handleSubmit}>
        <FormField label='Название' name='name'>
          <FormText value={this.state.name} name='name' onChange={this.handleInputChange} />
        </FormField>

        <FormField label='Валюта' name='currency'>
          <FormText value={this.state.currency} name='currency' onChange={this.handleInputChange} />
        </FormField>

        <FormField label='Описание' name='description'>
          <FormText value={this.state.description} name='description' onChange={this.handleInputChange} />
        </FormField>
        <br />
        <Button type='submit'>Отправить</Button>
      </Form>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  createAccount: (account) => dispatch(updateFirebaseAction('accounts', account))
});

export default connect(undefined, mapDispatchToProps)(CreateAccount);
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486
