import React, { Component } from 'react'
import banner from '../images/banner.jpg'
import { Button } from 'react-bootstrap'
import { TimelineLite } from 'gsap'

class Banner extends Component {
    // animating elements in the banner init
    ban_h = null;
    p_n_btn = [];
    para_tween = new TimelineLite({paused: true});

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.para_tween
            .to(this.ban_h, 1.5, { x: 0 })
            .staggerTo(this.p_n_btn, 2, { opacity: 1, y: 0 }, 0.1)
            .play();

            console.log(this.p_n_btn);
    }
    render() {
        return (
            <div className="banner">
                <img src={banner} />
                <div className="banner-content">
                    <h1 ref={h => { this.ban_h=h }}>NAART Artist</h1>
                    <p ref={p => { this.p_n_btn[0] = p }}>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown 
                        typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    </p>
                    <Button className="gal_btn" variant="outline-primary" ref={ btn => { this.p_n_btn[1]=btn } }>View Gallery</Button>
                </div>
            </div>
        );
    }
}

export default Banner
