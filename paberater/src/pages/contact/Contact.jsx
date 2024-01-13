import "./Contact.css"
import QuestionForm from '../../components/question-form/QuestionForm'
import EmailIcon from "../../assets/icons/Icon_email.svg"
import PhoneIcon from "../../assets/icons/Icon_phone.svg"
import LocalIcon from "../../assets/icons/Group-local.svg"
import video3 from "../../assets/video/video (2160p).mp4";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"



function Contact() {
  return (
    <>
    <ScrollToTop />
            <section className="recognition_services2">
        <video className="video_recognition" autoPlay loop muted>
          <source src={video3} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="figure_title4">
          <h1 className="titleContact">Contacto</h1>
        </div>
      </section>
        <QuestionForm />
        
        <section className="Contact">
          <div className='contact-div'>
            <img src={PhoneIcon} alt="" />
            <p>+49 157 806 33091</p>
          </div>

          <div className='contact-div'>
            <img src={EmailIcon} alt="" />
            <p>info@paberarter.de</p>
          </div>

          <div className='contact-div'>
            <img src={LocalIcon} alt="" />
            <p>Waltersdorfer Ch 20312355 <br /> Berlin, Alemania</p>
          </div>

        </section>

        <section className='Map'>
          <iframe
          className='paberater-map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.282870996985!2d13.511988876248347!3d52.40154937203035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a907b9c7a25b01%3A0xcbb1c50d60ec9f7!2sPABerater%20GmbH!5e0!3m2!1ses!2ses!4v1704554589181!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Map"
          ></iframe>
        </section>
    </>
  )
}

export default Contact