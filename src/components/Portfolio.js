import React, { Component } from 'react';
import "./portfolio.css";
import employee_directory from '../assets/employee_directory.png';
import BugTesters from '../assets/BugTesters.png'; 
import TravelGuideWebsite from '../assets/TravelGuideWebsite.png'; 
import weather_forecast from '../assets/weather_forecast.png'; 
import burgers_devoured from '../assets/burgers_devoured.png'; 
import fitness_tracker from '../assets/fitness_tracker.png';


// import { BrowserRouter as Router,Link } from 'react-router-dom';
class Portfolio extends Component {
    portfolioData = {
        "portfolio": [
            {
                "name": "Employee Directory",
                "description": "The app allows to view entire employee directory a quick access to their information.",
                "img": employee_directory,
                "repolink": "https://github.com/Usman3278/employee-directory",
                "tech": "React.js, JavaScript, Bootstrap, HTML, CSS"
            },
            {
                "name": "Eat-Da-Burger App",
                "description": "This app allows the user to add any burger to the connected MySQL database, consume that burger change the devoured status and then delete it from the database.",
                "img": burgers_devoured,
                "repolink": "https://github.com/Usman3278/burger",
                "tech": "JavaScript, Express.js, Node.js, Mongoose"

            },
            {
                "name": "Fitness Tracker",
                "description": "Allows the user to track a workout. Various attributes of the workout can be stored. The workouts are saved in a Mongo database.",
                "img": fitness_tracker,
                "repolink": "https://github.com/Usman3278/fitnesstracker",
                "tech": "JavaScript, Node.js, Express, MongoDB, Mongoose"

            },
            {
                "name": "Weather Forecast",
                "description": "A weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities.",
                "img": weather_forecast,
                "repolink": "https://github.com/Usman3278/weatherdashboard",
                "tech": "HTML, CSS, Bootstrap, Javascript, jQuery, Server-side APIs"

            },
            {
                "name": "Travel Guide Website-Project1",
                "description": "The purpose of this application is to provide tourists help in guidance finding delicious foods, location of resturants and 5 days forcast.",
                "img": TravelGuideWebsite,
                "repolink": "https://github.com/Usman3278/group_project",
                "tech": "HTML, CSS, Moment JS Javascript, JQuery, API"
            },
            {
                "name": "BugTesters_Project2",
                "description": "This application is a forum for coders to go and post coding challenges. This application utilizes Node and Express for web servers and is backed by MySQL database with a Sequelize ORM.",
                "img": BugTesters,
                "repolink": "https://github.com/Usman3278/project2",
                "tech": "HTLM, CSS, JavaScript, API, MySQL, Sequelize, Handlebars, Express"
            },

        ]

    }


    render() {
        return (

            <div id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h3>Portfolio</h3>
                        <hr class="divider" />
                        <div className="card-deck" id="portfolio-wrapper">
                            {
                                this.portfolioData.portfolio.map((item) => {
                                    return (
                                        < div className="col-lg-4 col-sm-6 portfoliocards" >
                                            <div className="card">
                                                {/* <div className="card-block"> */}
                                                <img className="card-img-top" src={item.img} alt="portfolio" />
                                                <h4 className="card-title">{item.name}</h4>
                                                <p className="card-text">{item.description}</p>
                                                <div className="twoButtons">
                                                    <a href={item.repolink} className="btn btn-outline-primary btn-sm"
                                                        id="github" role="button">View GitHub Repo</a>
                                                    <div className="builtWith">{item.tech}</div>
                                                </div>

                                                {/* </div> */}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Portfolio;