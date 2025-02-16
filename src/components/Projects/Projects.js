import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import atomic from "../../Assets/Projects/Atomic-Blog.png";
import bankist from "../../Assets/Projects/Bankist.png";
import eatnsplit from "../../Assets/Projects/Eat-n-Split.png";
import faraway from "../../Assets/Projects/Faraway.png"
import omnifood from "../../Assets/Projects/Omnifood.png";
import reactquiz from "../../Assets/Projects/React Quiz.png";
import rollndice from "../../Assets/Projects/Roll-n-dice.png";
import todo from "../../Assets/Projects/Todo-list.png";
import worldwise from "../../Assets/Projects/Worldwise.png";
import guess from "../../Assets/Projects/guess-mmy-num.png";
import pizza from "../../Assets/Projects/pizza.png";
import popcorn from "../../Assets/Projects/usePopcorn.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Fast-pizza"
              description="A fully responsive web application made by html, tailwind css and React js.I can order pizza from the menu,add or delete the pizza. Items are added in the cart with calculations. User can select his address through Map.I have used Rest api for displaying the menu items. I also used React Redux for managing different states of cart and user.I used Redux Thunk for fetching the data.
(Redux,useReducer,React Router,Reusability,props,useEffect hook concept is used).
"
              ghLink="https://github.com/NavteshMaurya/FastPizza"
              demoLink="https://fast-pizzas-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldwise}
              isBlog={false}
              title="WorldWise"
               description="A SPA web application made by html,css and React js in which I can tap to any country or city on the displayed map. And then we have city and country list in which our selected cities is shown and we can add notes and date of the trip. We can also get our location on the map.I have used geolocation api and leaflet library for displaying the map and location."
              ghLink="https://github.com/NavteshMaurya/Worldwise"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atomic}
              isBlog={false}
              title="Atomic Blog"
              description="A web application made by html,css and React js in which multiple post are shown.Also,we can search for the posts in search bar and we can add a post by giving its title and body.We can also see the archieve posts. A night mode is also there we can shift from night mode to light.(Context API, Reusability,
              ,State,props,useEffect hook concept is used)."
              ghLink="https://github.com/NavteshMaurya/AtomicBlog"
              demoLink="https://atomic-blog-theta-three.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={popcorn}
              isBlog={false}
              title="usePopcorn"
              description="A web application made by html,css and React js in which we can search for a movie from an API call, select that movie, give 5 star rating, add to watched list.(Component composition, Reusability ,State,props,useEffect hook concept is used)."
              ghLink="https://github.com/NavteshMaurya/usePopCorn"
              // demoLink="https://use-pop-corn-lake.vercel.app/" // use npm run server first,then only data is displayed
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactquiz}
              isBlog={false}
              title="React-Quiz"
              description="A web application made by html,css and React js in which there are 15 MCQ and user has a time limit for completing the quiz.(Context api with UseReducer hook, component composition,props concept is used.)"
              ghLink="https://github.com/NavteshMaurya/ReactQuiz"
              // demoLink="https://react-quiz-tau-orcin.vercel.app/" // // use npm run server first,then only data is displayed
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
           description="A web application made by using MUI components and React js. 
           In this application we can see our todos task, we can add the new task and also update the task and status of task.React router,State,Props,useEffect hook concepts are used)."
              ghLink="https://github.com/NavteshMaurya/todolist"
              //  demoLink="https://todolist-eta-bice.vercel.app/" //// use npm run server first,then only data is displayed
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankist}
              isBlog={false}
              title="Bankist"
              description="A web application  made by purely html,css and javascript in which we can request a loan, transfer   money to another person, and close account and the balance is updated in UI, deposits  and withdrawal are shown of a person account.(Various Arrays methods are used like map,filter,reduce,find)."
              ghLink="https://github.com/NavteshMaurya/Bankist"
              demoLink="https://bankist-three-gamma.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faraway}
              isBlog={false}
              title="FarAway"
              description="A web application made by using html,css and React js in which we can add the custom items for going to the trip,unchecked and checked them and delete them. ( Props,State,controlled elements,adding and deleting element concept is used)."
              ghLink="https://github.com/NavteshMaurya/Far-away"
              // demoLink="https://plant49-ai.herokuapp.com/" // error in deployment
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rollndice}
              isBlog={false}
              title="Roll-n-Dice"
              description="A web application purely made by html,css and javascript in which two person can hold and roll and their scores are calculated and the highest score player won. DOM Manipulation,ClassList and Events concept of javascript is used."
              ghLink="https://github.com/NavteshMaurya/Ludo_game"
              demoLink="https://ludo-game-jet.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatnsplit}
              isBlog={false}
              title="Eat-n-Split"
               description="A web application made by using html,css and React js in which you can split the bill between you and your  friend. (State,props, controlled element,adding and removing data concepts are used).

"
              ghLink="https://github.com/NavteshMaurya/Eat-n-split"
              demoLink="https://eat-n-split-livid-one.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guess}
              isBlog={false}
              title="Guess-My-Number"
              description="A web application in which we have to guess a number and that no is then checked with random guess no generated.Score and high score are calculated from this.DOM Manipulation and Events concept is used in this project."
              ghLink="https://github.com/NavteshMaurya/Guess-my-num"
              demoLink="https://guess-my-num-rho.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omnifood}
              isBlog={false}
              title="Omnifood"
              description="A responsive web application made by pure html and Css in which a person can see the food we are     offering.There are many sections like hero,featured in,how it works,tetimonials,pricing,call to action,footer."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://omnifood-five-rose.vercel.app/"
            />
          </Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
