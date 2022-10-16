import React, { Component } from 'react';
import ContactForm from './ContactForm';
// import ContactForm from './ContactForm';
class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
      </div>
    );
  }
}
export default App;
