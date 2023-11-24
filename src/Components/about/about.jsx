import React from "react";
import "./about.css";
import "../header/header.css";
import AboutImg1 from "../../assets/about1.jpg";
import AboutImg2 from "../../assets/about2.jpg";
import AboutImg3 from "../../assets/about3.jpg";
import AboutImg4 from "../../assets/about4.jpg";

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
            Я, Филиппова Дарья, в данном проекте являюсь системным аналитиком, а
            также выполняю роль креатив-дизайнера.
          </p>
          <a href="https://t.me/fillipovad" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg2} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Панаев Иван, В данном проекте занимался разработкой серверной
            части сервиса. Работаю AppSec-инженером в компании ЦФТ.
          </p>
          <a href="https://t.me/ipanaev" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg3} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Глебов Лев, в данном проекте занимался обучением нейронной сети.
            Работаю ML инженером в компании DoubleCheck.
          </p>
          <a href="https://t.me/mo_n1k" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg4} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Смородин Богдан, в данном проекте являюсь системным-бизнес
            аналитиком. Работаю системным аналитиком в компании Marketing
            InfoServices
          </p>
          <a href="https://t.me/itsqsitcsxou" className="button button--flex">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
