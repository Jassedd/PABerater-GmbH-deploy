import React from "react";
import "./JoinUp.css";
import Jorge7 from "../../assets/img/jorge-7.png"
import BtnJoinUp from "../btn-joinUp/BtnJoinUp";

function JoinUp() {
  return (
    <>
      <article className="articleJoinUp">
        <h3 className="JoinUp_text">
          Únete a <span className="HighlightedText">+100 latinos</span> que{" "}
          <span className="HighlightedText">han crecido</span>{" "}
          <span className="HighlightedText">profesionalmente</span> 
          <br /> a través de
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
            <h3 className="JoinUp_callToAction">
              ¿Empezamos a planificar tu futuro en Alemania?
            </h3>
            <div className="btn_JU">            
              <BtnJoinUp />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default JoinUp;
