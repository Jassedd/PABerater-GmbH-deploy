import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import CookiesAcordion from "../../components/CookiesAcordion/CookiesAcordion";
import "./cookiesPolicy.css";

const Datenschutzerklärung = () => {
return (
    <div className="datenschutz">
    <h1>Datenschutzerklärung</h1>
    <p>
    Wir bedanken uns für Ihr Interesse an unserem Onlineauftritt. Für uns ist 
    der Schutz Ihrer personenbezogenen Daten sehr wichtig. Daher möchten wir Sie 
    an dieser Stelle über den Datenschutz und den Umgang mit personenbezogenen Daten
    auf unserer Internetseite www.pabetarer.de  informieren.
    </p>
    <br />
    <h2>Bitte lesen Sie diese Datenschutzerklärung sorgfältig und aufmerksam durch.</h2>
    <p>
    Diese Datenschutzerklärung gilt für die Erhebung, Verarbeitung und Speicherung 
    (im Folgenden Verarbeitung genannt) von personenbezogenen Daten im Rahmen Ihres Besuchs
    unserer Internetplattform www.paberater.de (im Folgenden Website genannt).
    </p>
    <br />
    <h3>1.Diensteanbieter und verantwortliche Stelle</h3>
    <p>
    Diensteanbieter und verantwortliche Stelle für diese Website ist die PABerater GmbH,
    Waltersdorfer Chaussee 203, 12355 Berlin.
    Die PABerater GmbH (im Folgenden PABerater, wir genannt) beachtet alle anwendbaren 
    Datenschutzgesetze und ist darüber hinaus bestrebt, den Datenschutz stetig zu verbessern. 
    Sie können diese Erklärung über Ihren Browser speichern und ausdrucken.
    </p>
    <br />

    <h3>2.Gegenstand des Datenschutzes</h3>
    <p>
    Gegenstand des Datenschutzes sind personenbezogene Daten nach Art. 4 
    Nr. 1 Datenschutz-Grundverordnung EU (DS-GVO). Dies sind Einzelangaben über persönliche 
    oder sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person. Darunter 
    fallen alle Angaben, die einen Rückschluss auf eine identifizierte oder identifizierbare 
    Person zulassen, etwa dessen Name, Adresse oder seine Kontaktdaten (z.B. Telefonnummer,
    Post- und E-Mail-Adresse). Auch IP-Adressen sind personenbezogene Daten in diesem Sinne.
    </p>
    <br />

    <h3>3.Zweckgebundene Datenverwendung</h3>
    <p>
    Wir beachten den Grundsatz der zweckgebundenen Verwendung von personenbezogenen Daten und 
    verarbeiten Ihre personenbezogenen Daten nur für die Zwecke, für die Sie uns diese mitgeteilt bzw. 
    freigegeben haben.
    Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt ohne Ihre ausdrückliche Zustimmung nicht,
    sofern dies nicht zur Erbringung der Dienstleistung oder zur Vertragsdurchführung notwendig ist. Auch 
    die Übermittlung an auskunftsberechtigte staatliche Institutionen und Behörden erfolgt nur im Rahmen 
    der gesetzlichen Auskunftspflichten oder wenn wir durch eine gerichtliche Entscheidung zur Auskunft 
    verpflichtet werden.
    In unserem Unternehmen legen wir großen Wert auf den Datenschutz. Alle unsere Mitarbeiter und die 
    von uns beauftragten Dienstleistungsunternehmen sind von uns zur Verschwiegenheit und zur Einhaltung 
    der datenschutzrechtlichen Bestimmungen verpflichtet worden.
    </p>
    <br />

    <h3>4.Verarbeiten personenbezogener Daten</h3>
    <p>
    PABERATER verarbeitet personenbezogene Daten generell nur, soweit die DS-GVO oder eine andere Rechtsvorschrift 
    dies erlaubt oder anordnet oder Sie als Nutzer oder Besucher unserer Website zugestimmt haben, Art. 6 Abs. 1 S. 1 
    lit. a oder die Erhebung dieser Daten für die Erfüllung eines Vertrages mit Ihnen notwendig ist, Art. 6 Abs. 1 S. 1 lit. b.
    Als Nutzer unserer Website werden von Ihnen folgende Daten verarbeitet:
    Kontaktdaten wie Vorname, Name, Telefon-/Mobiltelefonnummer, E-Mail-Adresse, Rechnungsadresse, Beruf.
    Diese Angaben sind notwendig, um die von uns zur Verfügung gestellten Leistungen richtig nutzen zu können. Die Angaben 
    werden über ein Kontaktformular erhoben.
    Die Erhebung dieser Daten dient der Umsetzung der originären Funktion des Webangebots von PABERATER. Die Rechtfertigung 
    ergibt sich aus Art. 6 Abs. 1 Satz 1 lit. a und b DSGVO.
    Darüber hinaus bieten wir einen Newsletter an. Für den Versand des Newsletters verarbeiten wir ihre E-Mail-Adresse. 
    Der Newsletter muss auf unserer Website ausdrücklich abonniert werden. Sie können den Newsletter jederzeit widerrufen. 
    Die Rechtfertigung ergibt sich aus Art. 6 Abs. 1 Satz 1 lit. b DSGVO aufgrund einer ausdrücklich von Ihnen erteilten Einwilligung.
    </p>
    <br />

    <h3>5.Datenerhebung und -verwendung zur Bereitstellung und Nutzung der Website</h3>
    <p>
    PABERATER erhebt und verwendet personenbezogene Daten im Zusammenhang mit der Bereitstellung dieser Website nur, soweit die DS-GVO 
    oder eine andere Rechtsvorschrift es erlaubt oder der Nutzer zugestimmt hat.
    Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an 
    den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen 
    werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
    </p>
    <br />
    <ul>
        <li>
        IP-Adresse des anfragenden Rechners,
        </li>
        <li>
        Datum und Uhrzeit des Zugriffs,
        </li>
        <li>
        Name und URL der abgerufenen Datei,
        </li>
        <li>
        Website, von der der Zugriff erfolgt (Referrer-URL),
        </li>
        <li>
        verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.
        </li>
        <li>
        Längen- und Breitengrad Ihres Standorts
        </li>
        <p>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
        <li>
        Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
        </li>
        <li>
        Gewährleistung einer komfortablen Nutzung unserer Website,
        </li>
        <li>
        Auswertung der Systemsicherheit und -stabilität sowie
        </li>
        <li>
        zu weiteren administrativen Zwecken.
        </li>
    </ul>
    <p>
    Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. b und f DSGVO. Unser berechtigtes 
    Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen 
    Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
    Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste ein. Nähere Erläuterungen 
    dazu erhalten Sie unter den Ziff. 6 und 7 dieser Datenschutzerklärung.
    </p>
    <br />
    <h3>6.Umfang und Zweck der Datenerhebung und -verwendung für sonstige Zwecke</h3>
    <p>
    PNeben den unter Nr. 4 und 5 dieser Erklärung aufgeführten Nutzungen Ihrer personenbezogenen Daten können 
    Ihre Daten unter bestimmten, sogleich näher erläuterten Voraussetzungen genutzt werden:
    </p>
    <br />
    <ul>
        <li>
        a) Übermittlung Ihrer Daten innerhalb des Unternehmens
        </li>
        <p>
        Um Ihnen im Rahmen unserer angebotenen Dienstleistungen einen möglichst umfangreichen Service bieten 
        zu können, werden von Ihnen folgende Daten innerhalb des Unternehmens verarbeitet:
        Kontaktdaten wie Vorname, Name, Adresse, Telefon-/Mobiltelefonnummer, E-Mail-Adresse.
        </p>
        <li>
        b) Übermittlung Ihrer Daten an Dritte
        </li>
        <p>
        Soweit dies erforderlich ist, geben wir personenbezogene Daten an Unternehmen, die wir im Zusammenhang mit der Datenverarbeitung einsetzen, sogenannte Auftragsverarbeiter, unter Beachtung der datenschutzrechtlichen Anforderungen weiter.
        Darüber hinaus findet eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken nicht statt.
        Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
        </p>
        <li>
        Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,
        </li>
        <li>
        die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung 
        von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes 
        schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,
        </li>
        <li>
        für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche 
        Verpflichtung besteht, sowie
        </li>
        <li>
        dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von 
        Vertragsverhältnissen mit Ihnen erforderlich ist.
        </li>
    </ul>
    <h3>7.Verwendung von Cookies/social media/Plugins</h3>
    <p>
    PABERATER setzt auf seiner Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.
    In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.
    Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht.
    Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen sie getätigt haben, um diese nicht noch einmal eingeben zu müssen.
    Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe Ziff. 5). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht.
    Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.
    Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neues Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.
    </p>
    <br />
    <ul>
        <li>
        a) Vermeidung von Cookies/Allgemeines Widerspruchsrecht
        </li>
        <p>
        Unabhängig von der Art des verwendeten Cookies haben Sie stets die Wahl zu entscheiden, ob Sie Cookies akzeptieren wollen oder nicht. Sie können Ihren Browser so einstellen, dass Sie benachrichtigt werden, wenn Sie ein Cookie erhalten oder Sie können Ihr bestehendes gesetzliches Widerspruchsrecht gegen die Verwendung von Cookies stets dadurch ausüben, dass Sie Cookies in den Browsereinstellungen ablehnen. Die Einzelheiten hierzu entnehmen Sie bitte der Hilfe-Funktion Ihres Internetbrowsers. Hiervon unberührt bleibt – soweit nachfolgend näher beschrieben – die Möglichkeit, der Verwendung bestimmter Cookies gesondert zu widersprechen.
        Wenn Sie keine Cookies akzeptieren, können Sie möglicherweise nicht die vollständige Bandbreite der Websiten-Funktionen nutzen. Folgende Arten von Cookies kommen auf unseren Websiten zum Einsatz:
        </p>
        <li>
        b) Session Cookies
        </li>
        <p>
        PABERATER verwendet zur Verbesserung der Darstellung und der Navigation sog. Session-Cookies. Diese verlieren nach dem Verlassen unserer Websiten ihre Gültigkeit.
        Weitere Informationen über Cookies, Flash Cookies und andere Tools gibt es auf den folgenden Websites:
        </p>
        <li>
            <a href="https://allaboutcookies.org/">https://allaboutcookies.org/</a>
        </li>
        <li>
            <a href="https://youronlinechoices.eu/">https://youronlinechoices.eu/</a>
        </li>
        <li>
            <a href="http://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html">http://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html</a>
        </li>
        <li>
            <p> Ein Video über Cookies: </p> <a href="https://www.google.co.uk/goodtoknow/data-on-the-web/cookies">https://www.google.co.uk/goodtoknow/data-on-the-web/cookies</a>
        </li>
    </ul>








    <h2>3. ¿Qué son los scripts?</h2>
    <p>
        Un script es un fragmento de código de programa que se utiliza para
        hacer que nuestra web funcione correctamente y de forma interactiva.
        Este código se ejecuta en nuestro servidor o en tu dispositivo.
    </p>
    <br />
    <h2>4. ¿Qué es una baliza web?</h2>
    <br />
    <p>
        Una baliza web (o una etiqueta de píxel) es una pequeña e invisible
        pieza de texto o imagen en una web que se utiliza para monitorear el
        tráfico en una web. Para ello, se almacenan varios datos sobre usted
        mediante estas balizas web.
    </p>
    <br />
    <h2>5. Cookies</h2>
    <h3>5.1 Cookies técnicas o funcionales</h3>
    <p>
        Algunas cookies aseguran que ciertas partes de la web funcionen
        correctamente y que tus preferencias de usuario sigan recordándose. Al
        colocar cookies funcionales, te facilitamos la visita a nuestra web. De
        esta manera, no necesitas introducir repetidamente la misma información
        cuando visitas nuestra web y, por ejemplo, los artículos permanecen en
        tu cesta de la compra hasta que hayas pagado. Podemos colocar estas
        cookies sin tu consentimiento.
    </p>
    <h3>5.2 Cookies de estadísticas</h3>
    <p>
        Utilizamos cookies estadísticas para optimizar la experiencia de la web
        para nuestros usuarios. Con estas cookies estadísticas obtenemos
        información sobre el uso de nuestra web. Te pedimos tu permiso para
        colocar cookies de estadísticas.
    </p>
    <h3>5.3 Cookies de marketing/seguimiento</h3>
    <p>
        Las cookies de marketing/seguimiento son cookies, o cualquier otra forma
        de almacenamiento local, usadas para crear perfiles de usuario para
        mostrar publicidad o para hacer el seguimiento del usuario en esta web o
        en varias webs con fines de marketing similares.
    </p>
    <h3>5.4 Redes sociales</h3>
    <p>
        En nuestra web hemos incluido contenido para promover páginas web
        (p.ej.: «Me gusta», «Pinear») o compartir (p.ej.: «tuitear») en redes
        sociales. Este contenido está incrustado con código derivado de terceros
        y guarda cookies. Este contenido podría procesar cierta información para
        anuncios personalizados. Por favor lea la política de privacidad de
        estas redes sociales (que puede cambiar frecuentemente) para saber que
        hacen con sus datos (personales) que procesan usando estas cookies. Los
        datos que reciben son anonimizados lo máximo posible.
    </p>
    <br />
    <h2>6. Cookies usadas</h2>
    <br />
    <div className="acordion_cookies">
        <CookiesAcordion />
    </div>
    <br />
    <h2>7. Consentimiento</h2>
    <p>
        Cuando visites nuestra web por primera vez, te mostraremos una ventana
        emergente con una explicación sobre las cookies. Tan pronto como hagas
        clic en «Guardar preferencias», aceptas que usemos las categorías de
        cookies y plugins que has seleccionado en la ventana emergente, tal y
        como se describe en esta política de cookies. Puedes desactivar el uso
        de cookies a través de tu navegador, pero, por favor, ten en cuenta que
        nuestra web puede dejar de funcionar correctamente.
    </p>
    <h3>7.1 Gestiona tus ajustes de consentimiento</h3>
    <p>Funcional - Siempre activo</p>
    <p>Estadísticas - Estadísticas</p>
    <p>Marketing - Marketing</p>
    <br />
    <h2>8. Activación/desactivación y borrado de cookies</h2>
    <p>
        Puedes utilizar tu navegador de Internet para eliminar las cookies de
        forma automática o manual. También puedes especificar que ciertas
        cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de
        tu navegador de Internet para que recibas un mensaje cada vez que se
        coloca una cookie. Para obtener más información sobre estas opciones,
        consulta las instrucciones de la sección «Ayuda» de tu navegador.
    </p>
    <p>
        Ten en cuenta que nuestra web puede no funcionar correctamente si todas
        las cookies están desactivadas. Si borras las cookies de tu navegador,
        se volverán a colocar después de tu consentimiento cuando vuelvas a
        visitar nuestras webs.
    </p>
    <br />
    <h2>9. Tus derechos con respecto a los datos personales</h2>
    <p>Tienes los siguientes derechos con respecto a tus datos personales:</p>
    <ul>
        <li>
        Tiene derecho a saber por qué se necesitan tus datos personales, qué
        sucederá con ellos y durante cuánto tiempo se conservarán.
        </li>
        <li>
        Derecho de acceso: tienes derecho a acceder a tus datos personales que
        conocemos.
        </li>
        <li>
        Derecho de rectificación: tienes derecho a completar, rectificar,
        borrar o bloquear tus datos personales cuando lo desees.
        </li>
        <li>
        Si nos das tu consentimiento para procesar tus datos, tienes derecho a
        revocar dicho consentimiento y a que se eliminen tus datos personales.
        </li>
        <li>
        Derecho de cesión de tus datos: tienes derecho a solicitar todos tus
        datos personales al responsable del tratamiento y a transferirlos
        íntegramente a otro responsable del tratamiento.
        </li>
        <li>
        Derecho de oposición: puedes oponerte al tratamiento de tus datos.
        Nosotros cumplimos con esto, a menos que existan motivos justificados
        para el procesamiento.
        </li>
    </ul>
    <p>
        Para ejercer estos derechos, por favor, contacta con nosotros. Por
        favor, consulta los detalles de contacto en la parte inferior de esta
        política de cookies. Si tienes alguna queja sobre cómo gestionamos tus
        datos, nos gustaría que nos la hicieras saber, pero también tienes
        derecho a enviar una queja a la autoridad supervisora (la autoridad de
        protección de datos).
    </p>
    <br />
    <h2>10. Datos de contacto</h2>
    <p>
        Para preguntas y/o comentarios sobre nuestra política de cookies y esta
        declaración, por favor, contacta con nosotros usando los siguientes
        datos de contacto:
    </p>
    <p>
        PABerater GmbH
        <br />
        Waltersdorfer Ch 203, 12355 Berlin
        <br />
        Alemania
        <br />
        Web: <a href="https://paberater.de">https://paberater.de</a>
        <br />
        Correo electrónico:{" "}
        <a href="mailto:info@paberterde">info@paberater.de</a>
        <br />
        Número de teléfono: +49 15780633091
    </p>
    <p>
        Esta política de cookies se ha sincronizado con cookiedatabase.org el
        octubre 25, 2023.
    </p>
    </div>
);
};

export default CookiePolicy;
