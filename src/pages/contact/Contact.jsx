import "./Contact.css"
import QuestionForm from '../../components/question-form/QuestionForm'
import EmailIcon from "../../assets/icons/Icon_email.svg"
import PhoneIcon from "../../assets/icons/Icon_phone.svg"
import LocalIcon from "../../assets/icons/Group-local.svg"
import ScrollToTop from "../../components/scrollToTop/ScrollToTop"
import Contacto from "../../assets/img/contacto.jpg";




function Contact() {
  return (
    <main>
    <ScrollToTop />
      <section className="contact_section">
      <img src={Contacto} alt="contact-img" className="banner_contact_img" />
        <div className="figure_contact">
          <h1 className="title_img_contact">
            Contacto
          </h1>
        </div>
      </section>
        <QuestionForm />
        
        <section className="Contact">
          <div className="info_contact">
          <div className='contact-div'>
            <img src={PhoneIcon} alt="" className="icons_contact"/>
            <p className="text_info_contact">+49 157 806 33091</p>
          </div>

          <div className='contact-div'>
            <img src={EmailIcon} alt="" className="icons_contact"/>
            <p className="text_info_contact">info@paberarter.de</p>
          </div>

          <div className='contact-div'>
            <img src={LocalIcon} alt="" className="icons_contact"/>
            <p className="text_info_contact">Waltersdorfer Ch 20312355 <br /> Berlin, Alemania</p>
          </div>

          </div>

          <div className='Map'>
          <iframe
          className='paberater-map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.282870996985!2d13.511988876248347!3d52.40154937203035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a907b9c7a25b01%3A0xcbb1c50d60ec9f7!2sPABerater%20GmbH!5e0!3m2!1ses!2ses!4v1704554589181!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Map"
          ></iframe>
        </div>
        </section>


    </main>
  )
}

export default Contact