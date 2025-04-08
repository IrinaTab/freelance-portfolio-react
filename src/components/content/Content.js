import "./style.css";

import itsme  from "./../../img/itsme.jpg";

import telegram  from "./../../img/telegram.svg";
import whatsapp  from "./../../img/whatsapp.svg";
import email  from "./../../img/email.svg";

import project1m  from "./../../img/project-1-mob.png";
import project2m  from "./../../img/project-2-mob.png";
import project3m  from "./../../img/project-3-mob.png";

const Content = () => {
    return (        
        <section className="content center">
            <div className="content__wrapper">
                <img src={itsme} alt="it is me" className="content__photo" />
                <h1 className="content__title content__title_big">Ирина Табия</h1>
                <h2 className="content__title content__title_smaller">Веб-разработка, </h2>
                <h2 className="content__title content__title_smaller">Freelance</h2>
                <h2 className="content__title content__title_small">Образование, курсы</h2>
                <p className="content__text">2004 - Приазовский государственный технический университет, 
                    экономика предприятия / бухгалтерский учет и аудит;
                </p>
                <p className="content__text">2024 - Онлайн-университет Skypro, Веб-разработка для фриланса</p>
                <div className="content__contacts">
                    <h2 className="content__title content__title_small">Контакты</h2>
                    <div className="content__icons">
                        <a href="https://t.me/IrinaTabVeb" target="_blank" rel="noreferrer" className="content__tg">
                            <img src={telegram} alt="Перейти в чат Telegram" className="content__icon content__icon_tg" />
                        </a>
                        <a href="https://wa.me/+7949" target="_blank" rel="noreferrer" className="content__wa">
                            <img src={whatsapp} alt="Перейти в чат WhatsApp" className="content__icon content__icon_wa" />
                        </a>
                        <a href="mailto:irisha.tab@mail.ru" target="_blank" rel="noreferrer" className="content__email">
                            <img src={email} alt="Написать письмо" className="content__icon content__icon_email" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="descrProject">
                <div className="descrProject__card descrProject__card_first">
                    <h3 className="descrProject__title">Сайт интернет-магазина Мебели</h3>
                    <img src={project1m} alt="" className="descrProject__img" />
                </div>
                <div className="descrProject__card descrProject__card_second">
                    <h3 className="descrProject__title">Сайт с мини-играми</h3>
                    <img src={project2m} alt="" className="descrProject__img" />
                </div>
                <div className="descrProject__card descrProject__card_third">
                    <h3 className="descrProject__title">Сайт компании Аудит бухгалтерского учета (Tilda)</h3>
                    <img src={project3m} alt="" className="descrProject__img" />
                </div>
            </div>
        </section>
    );
}
 
export default Content;