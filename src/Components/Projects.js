import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import SpotifyEmbed from "./SpotifyEmbed";
import colorSharp2 from "../Assets/img/color-sharp2.png"
import projImg1 from "../Assets/img/retro/corridor.jpg";
import projImg2 from "../Assets/img/retro/backrooms.jpg";
import projImg3 from "../Assets/img/retro/spaceship3.jpg";
import projImg4 from "../Assets/img/retro/saturnRings.png";
import projImg5 from "../Assets/img/retro/teslaInSpace.jpeg";
import projImg6 from "../Assets/img/retro/carinaNebula.png";
import projImg7 from "../Assets/img/retro/a$ap.jpg";
import projImg8 from "../Assets/img/retro/messi2.jpg";
import projImg9 from "../Assets/img/retro/design-bubble.jpg";
import projImg10 from "../Assets/img/retro/bb1.jpg";
import projImg11 from "../Assets/img/retro/books.jpg";


export const Projects = () =>{

    const projects1 = [
        {
            title: "StreamIt",
            description: "Web Development",
            imgUrl: projImg1,
            projectUrl: "https://glorious-nasturtium-6dc.notion.site/MUSIC-STREAMING-APP-64533ede888b4061b56bab47f78df4cb?pvs=4"
        },
        {
            title: "Galactic",
            description: "Frontend",
            imgUrl: projImg2,
            projectUrl: "https://glorious-nasturtium-6dc.notion.site/GALACTIC-0acfddbdaf344a0a9c055e6cf73ec6f4"
        },
        {
            title: "Semantic Segmentation of Satellite Imagery",
            description: "Deep Learning",
            imgUrl: projImg3,
            projectUrl: "https://glorious-nasturtium-6dc.notion.site/SEMANTIC-SEGMENTATION-OF-SATELLITE-IMAGES-d459f0fa5de54d39bc27913a2b1780dc?pvs=4"
        },
        {
            title: "Coming soon",
            description: "....",
            imgUrl: projImg4,
        },
        {
            title: "Coming soon",
            description: "....",
            imgUrl: projImg5,
        },
        {
            title: "Coming soon",
            description: "....",
            imgUrl: projImg6,
        },
    ];
    const projects3 = [
        {
            title: "Music/HipHop",
            description: "",
            imgUrl: projImg7,
            projectUrl: "#"
        },
        {
            title: "Football",
            description: "",
            imgUrl: projImg8,
            projectUrl: "#"
        },
        {
            title: "Art & Photography",
            description: "",
            imgUrl: projImg9,
            projectUrl: "#"
        },
        {
            title: "Movies & Series",
            description: "",
            imgUrl: projImg10,
            projectUrl: "#"
        },
        {
            title: "Books",
            description: "",
            imgUrl: projImg11,
            projectUrl: "#"
        },
    ];

    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Research</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Interests</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                            {
                                projects1.map((project, index) => {
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
                            <p>Coming soon....</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row className="justify-content-center">
                            {
                                projects3.map((project, index) => {
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
                    </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
            <div className="spotify">
                <SpotifyEmbed />
            </div>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}