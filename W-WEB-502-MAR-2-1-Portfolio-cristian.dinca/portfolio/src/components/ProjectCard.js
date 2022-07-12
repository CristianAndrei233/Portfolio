import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
       
      <div className="proj-imgbx">
        
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          <a className="project-showcase" href={url}>Go to project <ArrowRightCircle size={25}/></a>
        </div>
      </div>
      
    </Col>
  )
}