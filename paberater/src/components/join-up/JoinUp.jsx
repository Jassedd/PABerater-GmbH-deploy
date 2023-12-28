import React from "react";
import "./JoinUp.css";
import Jorge7 from "../../assets/img/jorge-7.png"

function JoinUp() {
  return (
    <>
      <article className="articleJoinUp">
        <h3>
          Únete a <span className="HighlightedText">+100 latinos</span> que{" "}
          <span className="HighlightedText">han crecido</span>{" "}
          <span className="HighlightedText">profesionalmente</span> a través de
          PABerater
        </h3>
        <section>
          <h1 className="NumbersJoinUp">400</h1>
          <p className="textJoinUp">latinos beneficiados</p>
          <hr className="line" />
        </section>

        <section>
          <h1 className="NumbersJoinUp">+300</h1>
          <p className="textJoinUp">títulos homologados</p>
          <hr className="line" />
        </section>

        <section>
          <h1 className="NumbersJoinUp">12</h1>
          <p className="textJoinUp">países de procedencia</p>
          <hr className="line" />
        </section>

        <section>
          <h1 className="NumbersJoinUp">+20</h1>
          <p className="textJoinUp">profesiones impulsadas</p>
          <hr className="line" />
        </section>

        <section className="JorgeJoinUp">
          <img src={Jorge7} alt="" className="jorge7" />
          <div className="joinUp">
            <h3>¿Empezamos a planificar tu futuro en Alemania?</h3>
            <button className="btnJoinUp">¿Comenzamos?</button>
          </div>
        </section>
      </article>
    </>
  );
}

export default JoinUp;
