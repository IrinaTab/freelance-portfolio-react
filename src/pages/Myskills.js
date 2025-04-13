import { useEffect } from 'react';
import "./../styles/style.css";

const Myskills = () => {

    useEffect(() => {
        const animatedTexts = document.querySelectorAll('.skills__text');

        animatedTexts.forEach((text, index) => {
          setTimeout(() => {
            text.classList.add('visible');
          }, (index + 1) * 700);
        });
    }, []);
        

    return (
        <section className="skills">
        <h1 className="skills__title">Ключевые навыки</h1>
        <div className="skills__wrapper">
            <div className="skills__text skills__text_top">
                Я начинающий специалист в области веб-разработки, специализирующийся на 
                создании пользовательских интерфейсов и интерактивных веб-сайтов. Обладаю базовыми навыками и 
                знаниями в области фронтенд-разработки, стремлюсь к постоянному обучению и развитию своих профессиональных качеств.
            </div>
            <div className="skills__text skills__text_1">
                <span className="text__bold">Знание языков программирования:</span> владение HTML, CSS и JavaScript.
                HTML: умение создавать структуру веб-страницы с помощью HTML-тегов, знание семантической вёрстки.
                CSS: навыки стилизации веб-страниц, понимание каскадности и специфичности, работа с flexbox и grid системами.
            </div>
            <div className="skills__text skills__text_2">
                <span className="text__bold">Адаптивная вёрстка:</span> умение создавать адаптивные и кроссбраузерные дизайны, которые корректно 
                отображаются на различных устройствах и браузерах.
            </div>
            <div className="skills__text skills__text_3">
                <span className="text__bold">Препроцессоры CSS:</span> знание и опыт работы с препроцессорами CSS, такими как Sass или Less.
            </div>
            <div className="skills__text skills__text_4">
                <span className="text__bold">Системы контроля версий:</span> владение системами контроля версий, такими как Git.
            </div>
            <div className="skills__text skills__text_5">
                <span className="text__bold">Коммуникация и работа в команде:</span> умение эффективно взаимодействовать с клиентами, дизайнерами и разработчиками бэкенда.
            </div>
         </div>
    </section>

    );
}
 
export default Myskills;