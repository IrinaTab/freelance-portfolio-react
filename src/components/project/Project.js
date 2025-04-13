import "./style.css";

const Project = ({ title, img, text1, text2, text3, text4, link }) => {
    return (
        <div className="card">
            <img src={img} alt={title} className="card__img" /> 
            <h2 className="card__title">{title}</h2>
            <p className="card__text">{text1}</p>
            <p className="card__text">{text2}</p>
            <p className="card__text">{text3}</p>
            <p className="card__text">{text4}</p>
            <a href={link} target="_blank" rel="noreferrer" className="card__link">Посмотреть работу</a>
        </div>
    );
}
 
export default Project;