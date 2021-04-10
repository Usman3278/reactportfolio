import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";
// import testimage from "../thetestpath";

function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Portfolio</h2>
            <Row>
              <Project
                name="Employee Directory"
                imgPath={require("../components/assets/images/EmployeeDirectory.png")}
                linkDeployed="https://usman3278.github.io/employee-directory/"
                linkGithub="https://github.com/Usman3278/employee-directory"
              />
              <Project
                name="Fitness Tracker"
                imgPath={require("../components/assets/images/FitnessTracker.png")}
                linkDeployed="https://cryptic-island-85185.herokuapp.com/"
                linkGithub="https://github.com/Usman3278/fitnesstracker"
              />
              <Project
                name="Burger App"
                imgPath={require("../components/assets/images/BurgersDevoured.png")}
                linkDeployed="https://youtu.be/_R8suL0z8iw"
                linkGithub="https://github.com/Usman3278/burger"
              />
            </Row>
            <Row>
              <Project
                name="Project 2"
                imgPath={require("../components/assets/images/BugTesters.png")}
                linkDeployed="https://agile-brushlands-37017.herokuapp.com/login"
                linkGithub="https://github.com/Usman3278/project2"
              />
              <Project
                name="Note Taker"
                imgPath={require("../components/assets/images/NoteTaker.png")}
                linkDeployed="https://notetaker1122.herokuapp.com/"
                linkGithub="https://github.com/Usman3278/notetaker"
              />
              <Project
                name="Password Generator"
                imgPath={require("../components/assets/images/PasswordGenerator.png")}
                linkDeployed="https://usman3278.github.io/passwordgenerator/"
                linkGithub="https://github.com/Usman3278/passwordgenerator"
              />
            </Row>
            <Row>
              <Project
                name="Code Quiz"
                imgPath={require("../components/assets/images/CodingQuiz.png")} 
                linkDeployed="https://usman3278.github.io/codequiz/"
                linkGithub="https://github.com/Usman3278/codequiz"
              />
              <Project
                name="DayPlanner"
                imgPath={require("../components/assets/images/DayPlanner.png")} 
                linkDeployed="https://usman3278.github.io/dayplanner/"
                linkGithub="https://github.com/Usman3278/dayplanner"
              />
              <Project
                name="Project 1"
                imgPath={require("../components/assets/images/TravelGuideWebsite.png")} 
                linkDeployed="https://nataliasozontova.github.io/group_project/"
                linkGithub="https://github.com/Usman3278/group_project"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;
