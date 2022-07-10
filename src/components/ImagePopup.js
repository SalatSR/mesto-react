function ImagePopup(props) {

  return ((
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ' '}`}>
      <div className="popup__container popup__container_image">
        <button onClick={props.onClose}
          type="button"
          className="popup__closer popup__closer_image-view"
          aria-label="popup closer button"></button>
        <img src={props.card.link}
          alt="Фотография"
          className="popup__image-view-window" />
        <h2 className="popup__description">{props.card.name}</h2>
      </div>
    </div>
  ));
}

export default ImagePopup;