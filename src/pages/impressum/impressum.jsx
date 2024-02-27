import React from "react";
import "./impressum.css";

const Impressum = () => {
return (
    <div className="impressum_policy">
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG</h2>
        <h3>PABerater GmbH</h3>
        <p>
        Waltersdorfer Chaussee 203
        12355 Berlin
        <br />
        Handelsregister: HRB 233076 B
        Registergericht: Amtsgericht Charlottenburg
        </p>
        <br />
        <h3>Vertreten durch:</h3>
        <p>
        Jorge Joel Pineda Arcia
        </p>
        <br />
        <h3>Vorsitzender des Aufsichtsrats:</h3>
        <p>
        PABerater GmbH
        </p>
        <br />
        <h3>Kontakt</h3>
        <p>
        Telefon: 015780633091
        <br />
        Telefax: +49 (0) 123 44 55 99
        <br />
        E-Mail: <a href="info@paberater.de">info@paberater.de</a>
        </p>
        <br />
        <h3>Steuernummer:</h3>
        <p>29/464/30320 </p>
        <br />
        <h2>EU-Streitschlichtung</h2>
        <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <br />
        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <p>
        Quelle: <a href="https://www.e-recht24.de/">eRecht24</a>
        </p>
    </div>
    );
};

export default Impressum;