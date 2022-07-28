import { useEffect } from 'react';

function ImagePopup({ card, isOpen, name, onClose }) {
  
  /** Закрываем попапы по нажатию Escape */
  const closeByEscape = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
    }
    
    return() => {
      document.removeEventListener('keydown', closeByEscape);
    }
  });

  /** Закрываем попапы по нажатию вне попапа */
  const closeByClick = (e) => {
    e.target.classList.contains('popup') && onClose();
  }

  return ((
    <div
      className={`popup popup_${name} ${isOpen && 'popup_opened'}`}
      onClick={closeByClick}
    >
      <div className="popup__container popup__container_image">
        <button onClick={onClose}
          type="button"
          className="popup__closer popup__closer_image-view"
          aria-label="popup closer button"></button>
        <img src={card.link}
          alt="Увеличенное, полноразмерное изображение из карточки"
          className="popup__image-view-window" />
        <h2 className="popup__description">{card.name}</h2>
      </div>
    </div>
  ));
}

export default ImagePopup;