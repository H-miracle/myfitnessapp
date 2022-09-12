import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


const About = () => {
  return (
    <>
      <Header title="About Us" image ={HeaderImage} >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut explicabo necessitatibus ex! Deleniti, ut assumenda?</p>
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story" />
          </div>

          <div className="about__section-content">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident voluptatibus natus non magnam explicabo repellat nulla quae, nisi itaque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident voluptatibus 
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident voluptatibus natus non magnam 
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident voluptatibus natus non magnam explicabo repellat nulla quae, nisi itaque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident voluptatibus 
            </p>
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Story" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Story" />
          </div>

          <div className="about__section-content">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident voluptatibus natus non magnam explicabo repellat nulla quae, nisi itaque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident voluptatibus 
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident voluptatibus natus non magnam 
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default About