import { useEffect } from 'react';
import "./../styles/style.css";
import itsmebg from "./../img/itsmebg.png";

const Aboutme = () => {

    useEffect(() => {
        const animatedAboutMeImg = document.querySelectorAll('.aboutme__img');
    
        animatedAboutMeImg.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add('visible');
          }, (index + 1) * 500); 
        });
      }, []);
    
     useEffect(() => {
        const animatedAboutMeText = document.querySelectorAll('.aboutme__text');

        animatedAboutMeText.forEach((text, index) => {
            setTimeout(() => {
                text.classList.add('visible');
            }, (index + 1) * 700); 
        });
    }, []);

    return (
        <section className="aboutme">
            <img src={itsmebg} alt="обложка страницы Обо мне" className="aboutme__img" />
            <div className="aboutme__wrapper">
                <div className="aboutme__text aboutme__text_first">
                    Моя цель — создавать качественные и функциональные веб-сайты, которые 
                    отвечают потребностям клиентов и радуют их своим внешним видом.
                </div>
                <div className="aboutme__text aboutme__text_second">
                    Я стремлюсь к тому, чтобы мои проекты были не только красивыми, но и 
                    удобными для пользователей, а также оптимизированными для поисковых систем.
                </div>
                <div className="aboutme__text aboutme__text_third">
                    На данный момент я активно ищу новые проекты, чтобы расширить свой опыт и 
                    портфолио. Я готова работать над задачами разной сложности и предлагать свои 
                    идеи для улучшения проектов.
                </div>
                <div className="aboutme__text aboutme__text_fourth">
                    Если вы ищете начинающего веб-разработчика, который готов учиться и расти 
                    вместе с вами, то я буду рада обсудить возможные проекты и предложить свои услуги.
                </div>
            </div>
        </section>
    );
}
 
export default Aboutme;