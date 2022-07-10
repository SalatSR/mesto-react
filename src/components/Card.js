function Card(props) {

  function handleClick() {
    props.onCardClick(props.card)
  }

  return((
    <article className="card">
        <img src={props.card.link}
                alt="Фото"
                className="card__img"
                onClick={handleClick} />
        <button type="button" className="card__delete-button" aria-label="delete button"></button>
        <div className="card__name-container">
          <h2 className="card__name">{props.card.name}</h2>
          <div className="card__like-wrapper">
            <button type="button" className="card__like" aria-label="like button"></button>
            <span className="card__like-counter">{props.card.likes.length}</span>
          </div>
        </div>
    </article>
  ))
}

export default Card;