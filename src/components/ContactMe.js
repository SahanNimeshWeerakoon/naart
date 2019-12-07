import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeOpen, faMapPin } from '@fortawesome/free-solid-svg-icons'

class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.state = { contact: '', message: '', name: '', nameErr: '', contactErr: '', messageErr: '' }
    }

    render() {
        return (
            <div className="contact-me mb-5">
                <h2 className="mt-5 mb-5">Contact Me</h2>
                <div className="contact-icons">
                    <Container>
                        <Row>
                            <Col xs={4}>
                                <a href="tel:+94711231234">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <p>+94 71 12 31 234</p>
                                </a>
                            </Col>
                            <Col xs={4}>
                                <a href="mailto:test@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                    <p>
                                        test@gmail.com
                                    </p>
                                </a>
                            </Col>
                            <Col xs={4}>
                                <a href="#">
                                    <FontAwesomeIcon icon={faMapPin} />
                                    <p>
                                        2/4, Regency towers,<br />Mayura place, Colombo 06
                                    </p>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="contact-message">
                    <h3 className="text-secondary">Send Me a Message</h3>
                    <Container>
                        <Row>
                            <Col xs={2}></Col>
                            <Col xs={8}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label className="text-secondary font-weight-bold">Your Name</Form.Label>
                                        <Form.Control type="text" value={this.state.name} onChange={this.handleChange} name="name" className="input_field" />
                                        <Form.Text className="text-danger">{this.state.nameErr}</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="text-secondary font-weight-bold">Your Email address / Phone number</Form.Label>
                                        <Form.Control type="text" value={this.state.contact} onChange={this.handleChange} name="contact" className="input_field" />
                                        <Form.Text className="text-danger">{this.state.contactErr}</Form.Text>
                                        <Form.Text className="text-muted">
                                            Your contact details are safe with me. It's just to contact you.
                                        </Form.Text>
                                    </Form.Group>
    
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="text-secondary font-weight-bold">Message</Form.Label>
                                        <Form.Control as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} name="message" className="input_field" />
                                        <Form.Text className="text-danger">{this.state.messageErr}</Form.Text>
                                    </Form.Group>
                                    <Row>
                                        <Col xs={9}></Col>
                                        <Col xs={3}>
                                            <Button variant="outline-primary" type="submit" block>
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                            <Col xs={2}></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        !this.state.name ? this.setState({ nameErr: 'Please enter your name...' }) : this.setState({ nameErr: '' });
        !this.state.contact ? this.setState({ contactErr: 'Please enter a contact number so that I can contact you...' }) : this.setState({ contactErr: '' });
        !this.state.message ? this.setState({ messageErr: 'Please enter a message...' }) : this.setState({ messageErr: '' });
        if(!this.state.name || !this.state.contact || !this.state.message) return ;
        const templateId = 'template_YQOASDVH';
        const serviceId = 'gmail';

        this.sendEmail(serviceId,templateId, {"message_html": this.state.message, "from_name": this.state.name, "reply_to": this.state.contact});
    }

    sendEmail(serviceId, templateId, variables) {
        window.emailjs.send(serviceId, templateId, variables)
            .then(res => {
                console.log('Email successfully sent');
            })
            .catch(err => console.log(err));
    }
}

export default ContactMe