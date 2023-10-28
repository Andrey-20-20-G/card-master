import React from "react";
import "./about.css";
import "../header/header.css";
import AboutImg1 from "../../assets/about1.jpg";
import AboutImg2 from "../../assets/about2.jpg";
import AboutImg3 from "../../assets/about3.jpg";
import AboutImg4 from "../../assets/about4.jpg";
import AboutImg5 from "../../assets/about5.jpg";

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
            Я, Муромцев Роман, в данном проекте занимался разработкой
            telegram-бота и обучением нейронной сети. Работаю ML инженером в
            компании Data Monsters
          </p>
          <a href="https://t.me/HeenUrpalainen" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg2} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Гаврилов Андрей, В данном проекте занимался разработкой web-сайта
            и проектированием UI/UX дизайна. Работаю FullStack-разработчиком в компании RIT Automation
          </p>
          <a href="https://t.me/Graf_Gafr" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg3} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Сергеева Анна, в данном проекте выполняю роль
            креатив-маркетолога. Работаю аналитиком в компании Devlniside.
          </p>
          <a href="https://t.me/Nyutaser" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg4} alt="" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__description">
            Я, Печёркина Алёна, в данном проекте выполняю роль
            креатив-дизайнера. Работаю аналитиком в Devlnside второй год.
          </p>
          <a href="https://t.me/alllyonss" className="button button--flex">
            Contact me
          </a>
        </div>
        <img src={AboutImg5} alt="" className="about__img" />
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
