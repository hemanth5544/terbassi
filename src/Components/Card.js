import "./Main.css";

const Card = (props) => {
    const {eachItem,imageFunction} = props;
    const {id,name, description,idea,p1,date,isLiked,description1,description2,description3} = eachItem;
    const imageButton = () => {
        imageFunction(id)
    }
    let value = "download.png";
    if (isLiked === true){
        value = "https://pngimg.com/uploads/like/like_PNG73.png";
    }
    return (
        <div className="col-12 col-md-6 col-lg-4 pt-3">
        <div className="Card-Container d-flex flex-row justify-content-between">
            <h1 className="header">{name}</h1>
            <button onClick={imageButton} className="button-like">
                <img src={value} alt="like" className="Image"/>
            </button>
        </div>
        <p className="description">{description}</p>
        <h6 className="description">{description1}</h6>
        <h6 className="description">{description2}</h6>
        <h6 className="description">{description3}</h6>
        <div className="d-flex flex-row justify-content-between">
            <p className="idea-color">{idea}<span className="p1-color">{p1}</span></p>
            <p className="date">{date}</p>

        </div>
        <hr className="horizontal d-md-none"></hr>
    </div>
    )
}

export default Card;