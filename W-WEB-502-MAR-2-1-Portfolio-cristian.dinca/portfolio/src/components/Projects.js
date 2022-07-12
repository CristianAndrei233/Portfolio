import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import snap from "../assets/img/snap.png";
import spotify from "../assets/img/spotiffy.png"
import css from "../assets/img/CSS.png"
import morpion from "../assets/img/morpion.png"
import meetic from "../assets/img/meetic.png"
import quiz from "../assets/img/quiz.png"
import p4 from "../assets/img/p4.png"
import cinema from "../assets/img/cinema.png"
import irc from "../assets/img/irc.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export default function Projects() {
    const projects = [
        {
          title: "My Spotify",
          description: "Project in React.js to display Spotify tracks and details.",
          imgUrl: spotify,
          url: "",
        },
        {
          title: "My Snapchat",
          description: "Project in React Native. I recteated and developed the Snapchat app.",
          imgUrl: snap,
          url: "https://github.com/CristianAndrei233/My_Snapchat"
        },
        {
          title: "Frameweork CSS",
          description: "I created a CSS framework which can be used to create a responsive website.",
          imgUrl: css,
          url: "https://github.com/CristianAndrei233/FrameworkCSS"
        },
        {
          title: "Morpion",
          description: "I created the game morpion in 4 hours.",
          imgUrl: morpion,
          url: "https://github.com/CristianAndrei233/Morpion"
        },
        {
          title: "My Meetic",
          description: "Website which is a clone of the Meetic app, named Tinder.",
          imgUrl: meetic,
          url: "https://github.com/CristianAndrei233/My_Meetic"
        },
        {
          title: "My Quiz",
          description: "Project in Symfony to display, resopond and create quiz questions and themes.",
          imgUrl: quiz,
          url: "https://github.com/CristianAndrei233/My_Quiz"
        },
        
      ];
      const projects2 = [
        {
          title: "Puissance 4",
          description: "I created the game Puissance 4, in PHP",
          imgUrl: p4,
          url: "https://github.com/CristianAndrei233/Puissance4",
        },
        {
          title: "My Cinema",
          description: "I created a website which shows the movies of a cinema.",
          imgUrl: cinema,
          url: "https://github.com/CristianAndrei233/My_Cinema"
        },
        {
          title: "My_IRC",
          description: "I created a chat website with rooms and private messages.",
          imgUrl: irc,
          url: "https://github.com/CristianAndrei233/IRC"
        },
        
      ];
      return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>My Projects</h2>
                    <p>Here you can see my projects I worked on during the Web@cademy at Epitech</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link  eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                              projects2.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>As I'm in the process of learning, more projects will come :D</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}
