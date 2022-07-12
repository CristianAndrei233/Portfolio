import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'


export default function skills() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    }

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>Skills</h2>
                    <p></p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'> 
                    <div className='item'>
                        <img src={meter1} alt='Web developement' />
                        <h5>Web Developement</h5>
                    </div>
                    <div className='item'>
                        <img src={meter2} alt='Mobile developement' />
                        <h5>Mobile Developement</h5>
                    </div>
                    <div className='item'>
                        <img src={meter1} alt='html' />
                        <h5>HTML</h5>
                    </div>
                    <div className='item'>
                        <img src={meter1} alt='css' />
                        <h5>CSS</h5>
                    </div>
                    <div className='item'>
                        <img src={meter3} alt='js' />
                        <h5>JavaScript</h5>
                    </div>
                    <div className='item'>
                        <img src={meter2} alt='react native' />
                        <h5>React Native</h5>
                    </div>
                    <div className='item'>
                        <img src={meter3} alt='reactJS' />
                        <h5>React JS</h5>
                    </div>
                    <div className='item'>
                        <img src={meter1} alt='php' />
                        <h5>PHP</h5>
                    </div>
                    <div className='item'>
                        <img src={meter3} alt='laravel' />
                        <h5>Laravel</h5>
                    </div>
                    <div className='item'>
                        <img src={meter3} alt='symfony' />
                        <h5>Symfony</h5>
                    </div>
                    <div className='item'>
                        <img src={meter2} alt='databases' />
                        <h5>MySQL / MongoDB</h5>
                    </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
  )
}
