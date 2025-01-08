
import aboutMe from "../images/about-me-trans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedText from "../components/AnimatedText";
import {
  faBullhorn,
  faCode,
  faComment,
  faDesktop,
  faSearch,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  const skillsSet1 = [
    { name: "React Development", percentage: 65 },
    { name: "JavaScript", percentage: 70 },
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 70 },
    { name: " Tailwind CSS", percentage: 50 },
  ];

  const skillsSet2 = [
    { name: "WordPress", percentage: 80 },
    { name: "Content Marketing", percentage: 50 },
    { name: "Facebook ads", percentage: 55 },
    { name: "Instagram ads", percentage: 55 },
    { name: "SEO", percentage: 65 },
  ];
  const services = [
    {
      icon: faDesktop,
      work: "web design",
      content: `
      I specialize in utilizing CMS platforms like WordPress to design or redesign your blog, business, landing page, or portfolio website responsively. My goal is to create a professional online representation that aligns with your vision and brand.
      `,
    },
    {
      icon: faCode,
      work: "frontend development",
      content: `
      Are you searching for a service that blends creativity with logic? Look no further! Utilizing frontend technologies such as HTML5, CSS3, React.js, Tailwind CSS, and Vite, I bring your client-side web design and development to vibrant life.
      `,
    },
    {
      icon: faServer,
      work: "backend development",
      content: `
     When it comes to web authentications, databases, stores, and ensuring overall security, rest assured that your website is in safe hands. I employ advanced backend logics integrated with Firebase.
      `,
    },
    {
      icon: faSearch,
      work: "SEO",
      content: `
      In the ever-changing digital landscape, I specialize in SEO to enhance online visibility. Through strategic keyword optimization and technical SEO practices, I aim to elevate your website's ranking and stand out in online competition.
      `,
    },
    {
      icon: faBullhorn,
      work: "Ads marketing",
      content: `
      I specialize in ads marketing, crafting targeted campaigns across platforms to boost your brand's reach. Using analytics and market insights, I optimize performance for maximum ROI with compelling messages and visuals tailored to your audience.
      `,
    },
    {
      icon: faFacebookSquare,
      work: "social media mgt",
      content: `
      Specializing in social media management, I aim to build a strong online presence for your brand through content curation, community engagement, and data-driven strategies. My goal is to elevate your brand's impact across diverse platforms with shareable content and effective scheduling.
      `,
    },
  ];

  return (
    <div className="bg-green-700">
      <div className="introduction">
        <h2 className="abt__heading">About Me</h2>


        <div className="project-container">
        <AnimatedText />
      </div>

        
        <div className="box-container">
          <div className="abt-img">
            <img src={aboutMe} alt="" lang="lazy" />
          </div>
          <div className="about-content">
            <p>
              Hello, I'm <span>Oluwamomi Akinbote</span>, known in the digital
              space as
              <span> maxonex</span>, and I'm located in Lekki, Lagos State,
              Nigeria. With 18 months of experience, I am an aspiring web expert
              dedicated to crafting visually captivating and highly functional
              websites.
            </p>
            <p>
              My motivation stems from a deep passion for exploring
              cross-cultural aspects of web design and development, and I
              continually stay abreast of the latest digital marketing
              strategies through coursework and professional development.
            </p>
            <p>
              Currently, I'm actively pursuing remote, full-time opportunities
              to apply and enhance my skills in web development. My portfolio
              showcases a passion for distinctive designs and user-friendly
              functionality. Feel free to share your unique web projects or app
              proposals—I'm eager to bring them to life!
            </p>

            <div className="clicks">
              <div className="download__CV">
                <a
                  href="https://drive.google.com/file/d/1vzeov5w9ccrZazu_KdHLZzpN7Kfnm0Ed/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
              <div className="social-links">
                <div className="about-links">
                  <a
                    href="https://www.linkedin.com/in/oluwamomi-akinbote"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <div className="about-links">
                    <a
                      href="https://wa.me/+2348149492012"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faComment} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a
                      href="https://www.facebook.com/Oluwamomiakinbote"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a
                      href="https://www.instagram.com/maxonex7/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a
                      href="https://github.com/OluwamomiAkinbote"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills section */}
      <div className="skill-progress-container">
        <h2 className="abt__heading">Proficiencies</h2>
        <div className="skill-set-container">
          <div className="skill-set">
            {skillsSet1.map((skill) => (
              <div key={skill.name} className="skill-progress">
                <h2>
                  {skill.name} : {skill.percentage}%
                </h2>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skill-set">
            {skillsSet2.map((skill) => (
              <div key={skill.name} className="skill-progress">
                <h2>
                  {skill.name} : {skill.percentage}%
                </h2>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services">
        <h2 className="abt__ heading">Services</h2>
        <div className="services-box">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.work}</h3>
              <p>{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
