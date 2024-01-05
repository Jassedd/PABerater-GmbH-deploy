import "./Footer.css"
import Logo from "../../assets/img/Logos/LOGO-BLANCO.svg";
import IntagramLogo from "../../assets/icons/logo_instagram.svg";
import YoutubeLogo from "../../assets/icons/logo_youtube.svg";
import FacebookLogo from "../../assets/icons/logo_facebook.svg";
import EmailIcon from "../../assets/icons/IconsmsIcon.svg";
import PhoneIcon from "../../assets/icons/IconPhone.svg";
import LocalIcon from "../../assets/icons/localitation.svg";

function Footer() {
  return (
    <>
      <section className="pinedaFooter">
        <img src={Logo} alt="logo" className="logoPaberater" />
        <div className="socialMediaFooter">
          <img src={IntagramLogo} alt="" className="IconsFooter" />
          <img src={YoutubeLogo} alt="" className="IconsFooterYT" />
          <img src={FacebookLogo} alt="" className="IconsFooter" />
        </div>
        <section className="contactFooter">
          <div className="infoFooter">
            <img src={EmailIcon} alt="" className="IconsFooter"/>
            <p>info@paberater.de</p>
          </div>
          <div className="infoFooter">
            <img src={PhoneIcon} alt="" className="IconsFooter"/>
            <p>+49 157 806 33091</p>
          </div>
          <div className="infoFooter">
            <img src={LocalIcon} alt="" className="IconsFooter"/>
            <p>
              Waltersdorfer Ch 20312355 <br /> Berlin, Alemania
            </p>
          </div>
        </section>
          <p>© 2023 PABerater GmbH. All Rights Reserved.</p>
      </section>

      <section className="cookiesFooter">
        <p>
          Die Rolle von PABerater GmbH besteht darin, als Kommunikationsbrücke
          zwischen unseren Kunden und den Institutionen zu fungieren und ihre
          Anfragen so zu übersetzen, dass sie in der deutschen Sprache
          verstanden werden können. <br /> <br />
          PABerater GmbH leistet selber keine Rechtsberatung.Bitte
          berücksichtigen Sie, dass es sich bei der sachverständigen Durchsicht
          Ihrer Studien- und Arbeitsunterlagen nicht um ein Rechtsgutachten oder
          eine Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes
          handelt. Eine juristische Aufarbeitung und Einordnung unter Anwendung
          der Rechtsnormen ggf. unter Verwendung dieser Auswertung ist nur durch
          einen zugelassenen Rechtsanwalt zulässig. Wir stellen Ihnen gerne
          einen Kontakt her. <br /> <br />
          
          PABerater GmbH no presta asesoramiento jurídico por
          sí misma.Tenga en cuenta que la revisión pericial de sus documentos de
          estudio y de trabajo no es un dictamen jurídico ni un asesoramiento
          legal en el sentido de la Ley de Servicios Jurídicos. Una revisión y
          clasificación legal utilizando las normas legales, en caso de que sea
          necesario utilizar esta evaluación, sólo está permitida por un abogado
          autorizado. Estaremos encantados de ponerle en contacto con un
          abogado.
        </p>
      </section>
    </>
  );
}

export default Footer;
