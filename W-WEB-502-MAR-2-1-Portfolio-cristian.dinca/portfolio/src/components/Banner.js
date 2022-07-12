import React from 'react'
import { Container , Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.png';
import {useState , useEffect} from 'react';
import 'animate.css';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 350);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Mobile Developper"];
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
  return (
   
    <section className='banner' id="home">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my portfolio</span>
                <h1>{`Hi, I'm Cristian Dinca`} <span>{text}</span></h1>
                <p>{`I'm a web developer with a passion for building beautiful and functional websites and learning new things everyday. 
                I'm currently within the Web@cademy formation at Epitech, and I'm looking for an alternance.`}</p>
            
                <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
               
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header IMG" className=''/>
            </Col>
        </Row>
    </Container>
    </section>
    
  )
}
