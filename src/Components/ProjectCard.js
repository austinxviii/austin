import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      <a href={projectUrl} className="no-blue" target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4 className="tinos-regular">{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};