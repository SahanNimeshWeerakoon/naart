import React, { Component } from 'react'
import  ReactDOM from 'react-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { TweenLite, TimelineLite } from 'gsap'
import aboutImg from '../images/about.jpg'

class About extends Component {
    constructor(props) {
        super(props);
        this.abt_h = null;
        this.comp = null;
        this.state = {
            ost: null
        }
    }

    componentDidMount() {
        // this.comp = TweenLite.to(this.abt_h, 2, {x: 100});
        window.addEventListener('scroll', this.scrollAnimation);
    }

    scrollAnimation = () => {
        this.setState({ost: this.abt_h.offsetTop});
        console.log(this.abt_h.offsetTop);
    }

    render() {
        return (
            <div className="about mt-5">
                <Container>
                    <h2 className="mb-5" ref={h => {this.abt_h=h}}>About Me</h2>
                    <Row>
                        <Col xs={4}>
                            <img src={aboutImg} alt="About Me" style={{width: '100%'}}/>
                        </Col>
                        <Col style={{}} className="mt-5">
                            <p className="text-secondary" style={{fontWeight: 'bold'}}>
                                Me huttawal walata danna content danne na mama. eewa type karanna tharan creative na. Ee creative kama hadaganna one kamakuth
                                mata na. so umba hithala umba ganai umbe paramarthai arawa meuwa methanata daapan. daapan newei. mata ewapan mama dannan
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About