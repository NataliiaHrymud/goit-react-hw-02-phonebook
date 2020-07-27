import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      };

    handleChange = (e) => {
        const key = e.target.dataset.input;
        const value = e.target.value;
        this.setState({ [key]:value })
    }

    render() {
        return (
            <form onSubmit={this.submitData}>
                <h2>Name</h2>
                <input type="text" onChange={this.handleChange} name="name" data-input ="name" value={name}/>
                <h2>Number</h2>
                <input type="text" onChange={this.handleChange} name="number" data-input ="number" value={number}/>
                <p></p>
                <button type="submit"> Add new contact </button>
            </form>
        )        
    }

}

const ContactForm = ({}) => (
    
)

ContactForm.propTypes = {

}

export default ContactForm;