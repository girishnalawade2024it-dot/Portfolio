import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${portfolioData.contact.email}`} data-cursor="disable">
                {portfolioData.contact.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`} data-cursor="disable">
                {portfolioData.contact.phone}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={portfolioData.contact.twitter}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href={portfolioData.contact.instagram}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{portfolioData.contact.name}</span>
            </h2>
            <h5>
              <MdCopyright /> {portfolioData.contact.year}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
