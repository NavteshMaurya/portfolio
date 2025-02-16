import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ display:"inline-block", textAlign:"justify" }}>
            Hi Everyone, I am <span className="purple"> Navtesh Maurya </span>
            from <span className="purple"> Haryana, India.</span>
            <br />
            I have a strong foundation in frontend development, specializing in building responsive web applications using
HTML, CSS, JavaScript, and React.js. As a dedicated and hardworking individual, I always prioritize my work and strive
for excellence. My academic performance has consistently been above 9 CGPA in my Bachelor's in Computer
Applications.Currently,I am in my final year of Online MCA from Manipal University and my performance has been above 8 CGPA. 
Now, I am eager to apply my skills to real-world projects, gain in-depth knowledge, and collaborate with experienced
professionals to develop interactive web applications and contribute to solving business challenges. I am passionate
about learning, innovation, and continuous growth in the field of web development.
<br></br>
<br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is no shortcut for success,you have to go step by step for achieving something Big."{" "}
          </p>
          <footer className="blockquote-footer">Navtesh Maurya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
