import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      
         <div className="about-container">

         <Link to='/' style={{backgroundColor:'yellowgreen'}}>
            Go Back
         </Link>
         
      <h2>About Me</h2>
      <p>
        Welcome to my website! I'm Mohanad Safi, and I have a passion for
        teaching programming and B.A Computer Sience. With 2 years of
        experience in teaching programming, I aim to provide high-quality courses that
        cater to learners of all levels.
      </p>
      <p>
        My goal is to make complex programming concepts easy to understand and
        apply. Whether you're a beginner looking to get started or an
        experienced developer seeking to expand your skillset, you'll find
        courses tailored to your needs.
      </p>
      <p>
        Join me on this exciting learning journey. Feel free to explore the
        courses I offer and take the first step towards enhancing your
        programming skills!
      </p>
    </div>
        
    </div>
  )
}

export default About
