import React from "react";
import "./about.css";
import "../header/header.css";
import AboutImg1 from "../../assets/Andre.jpg";
import AboutImg2 from "../../assets/Roman.jpg";
import AboutImg3 from "../../assets/about4.jpg";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About us</h2>
      <span className="section__subtitle">Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg1} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Гаврилов Андрей, в данном проекте являюсь разработчиком сервиса, а также креативным дизайнером.
            На данный момент являюсь Backend-разработчиком в компании RIT-Automation.
          </p>
          <a href="https://t.me/Graf_Gafr" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg2} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Муромцев Роман, В данном проекте занимался обучением нейронной сети и управлением команды. 
            Работаю ML инженером в компании T1 Group.
          </p>
          <a href="https://t.me/HeenUrpalainen" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg3} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Руденко Максим, в данном проекте занимался обучением нейронной сети.
            Работаю ML инженером в компании DoubleCheck.
          </p>
          <a href="https://t.me/cold_coffee_0" className="button button--flex">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
