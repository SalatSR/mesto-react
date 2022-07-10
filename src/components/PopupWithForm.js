function PopupWithForm(props) {
  
  return((
      <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ' '}`}>
        <div className="popup__container">
          <button onClick={props.onClose} type="button" className="popup__closer"></button>
          <h2 className="popup__header">{props.title}</h2>
          <form action="#" name={`form-${props.nameForm}`} className="popup__form" novalidate>
            {props.children}
            <button type="submit" className="popup__submit-button">{props.btnValue}</button>
          </form>
        </div>
      </div>
  ));
}

export default PopupWithForm;