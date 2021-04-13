import React from "react";
import "./about.css";
import resume from '../assets/MyResume.pdf';

function About() {
    return (
        <section class="page-section " id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-center mt-0">About Me</h2>
                        <hr class="divider" />
                        <div class="typewriter">
                            <h4 class="mb-0 css-typing">Proficient with HTML5, CSS3, JavaScript, jQuery, Java, Bootstrap, Express.js, React.js, Node.js, MongoDB, and MySQL.
                  Developed in areas of organization, planning and maintaining deadlines and completing priorities. Eager to learn the new skills.
                  Adopt at setting up achieving goals. Managing time and analyzing to solve problems.</h4>
                            <h4 class="mb-0 css-typing">  Received a certificate of completion after graduating from GW coding boot camp. 
                  Excels at collaborating or working individually, as demonstrated in each project and throughout career.</h4>
                            <h4 class="mb-0 css-typing">
                            Seeking to continue my professional development and utilize my knowledge in marketing and design to affect positive change on a global scale.</h4>
                        </div>
                        <br></br>
                        <div class="aboutMeButtons">
                            <a href={resume} class="btn btn-2" id="viewResume"
                                role="button">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
