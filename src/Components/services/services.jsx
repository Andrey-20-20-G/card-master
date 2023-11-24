import React, { useState } from "react";
import "./Services.css";
import QRCode from "react-qr-code";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">Info about project</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                HR-бот <br /> LLM
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div>
              <div
                className={
                  toggleState === 1
                    ? "services__modal1 active__modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">HR-бот</h3>
                  <p className="services__modal-description">
                    Чат-бот telegram для HR, использующий LLM для упрощения
                    взаимодействия с сотрудниками компании Smart Consulting
                  </p>
                  <p className="services__modal-description">
                    <QRCode
                      className="services__qr"
                      value="https://web.telegram.org/a/#6538637679"
                      viewBox={`0 0 256 256`}
                    />
                  </p>
                  <p className="services__modal-description">QR-code</p>
                </div>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                ТГ-бот для обеспечения <br /> безопасности товаров
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal1 active__modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">
                  Бот для росаккредитации
                </h3>
                <p className="services__modal-description">
                  Чат-бот telegram для росаккредитации, использующий LLM для
                  упрощения взаимодействия сотрудников с документацией компании
                  Федереальная служба аккредитации
                </p>
                <p className="services__modal-description">
                  <QRCode
                    className="services__qr"
                    value="https://t.me/AI_Accreditation_Bot"
                    viewBox={`0 0 256 256`}
                  />
                </p>
                <p className="services__modal-description">QR-code</p>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
              Интеллектуальный <br /> ассистент методиста
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div>
              <div
                className={
                  toggleState === 1
                    ? "services__modal1 active__modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">HR-бот</h3>
                  <p className="services__modal-description">
                    Веб сервис, предоставляющий краткие выжимки с глоссарием методистам  
                  </p>
                  <p className="services__modal-description">
                    <QRCode
                      className="services__qr"
                      value="https://web.telegram.org/a/#6538637679"
                      viewBox={`0 0 256 256`}
                    />
                  </p>
                  <p className="services__modal-description">QR-code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
