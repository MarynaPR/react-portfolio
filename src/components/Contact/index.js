import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Button, Container } from 'react-bootstrap';
function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };
    return (
        <Container fluid="md">
            <br></br>
            <h4>let's work together</h4>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">project description:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <Button variant="danger" data-testid="button" type="submit">send request</Button>
            </form>
        </Container>

    )
}
export default Contact;