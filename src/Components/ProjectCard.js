import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={13} sm={6} md={4}>
      <a href={projectUrl} className='no-blue' target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4 className="tinos-regular">{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}