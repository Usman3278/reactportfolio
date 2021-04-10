import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>About Me</h2>
            <Row>
              <Col size="sm-12">
                <img
                  className="img-fluid profile-pic float-left"
                  src={require("../components/assets/images/Profilepic.png")}
                  alt="Profile Pic"
                />
                <div className="bio">
                  <p>
                  I enjoy working in a team environment, and I get along well with people. In my past work experience, 
                  I implemented a system to help organize the communication between my coworkers to enhance our productivity as a team.
                  </p>
                  <p>
                  Proficient with HTML5, CSS3, JavaScript, jQuery, Java, Bootstrap, Express.js, React.js, Node.js, MongoDB, and MySQL.
                  Developed in areas of organization, planning and maintaining deadlines and completing priorities. Eager to learn the new skills.
                  Adopt at setting up achieving goals. Managing time and analyzing to solve problems.
                  Seeking to continue my professional development and utilize my knowledge in marketing and design to affect positive change on a global scale.
                  </p>
                  <p>
                  Received a certificate of completion after graduating from GW coding boot camp. 
                  Excels at collaborating or working individually, as demonstrated in each project and throughout career.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default About;
