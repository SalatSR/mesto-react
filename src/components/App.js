import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setIsSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setIsSelectedCard(card);
    setIsImagePopupOpen(!isImagePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return ((
    <div id="page" className="page">
      <div id="page__content" className="page__content">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="profile"
          title="Редактировать профиль"
          nameForm="profile-info"
          btnValue="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} >
          <input name="name"
            id="name"
            type="text"
            minLength="2"
            maxLength="40"
            className="popup__input popup__input_type_name"
            placeholder="ФИО"
            required />
          <span id='name-error' className="popup__error"></span>
          <input name="job"
            id="job"
            type="text"
            minLength="2"
            maxLength="200"
            className="popup__input popup__input_type_job"
            placeholder="Специальность"
            required />
          <span id='job-error' className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm name="avatar-edit"
          title="Обновить аватар"
          nameForm="avatar-edit"
          btnValue="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} >
          <input name="link"
            id="urlAvatarEdit"
            type="url"
            className="popup__input popup__input_type_url-avatar"
            placeholder="Ссылка на картинку"
            required />
          <span id="urlAvatarEdit-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm name="card"
          title="Новое место"
          nameForm="card-info"
          btnValue="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} >
          <input name="name"
            id="title"
            type="text"
            minLength="2"
            maxLength="30"
            className="popup__input popup__input_type_title"
            placeholder="Название"
            required />
          <span id="title-error" className="popup__error"></span>
          <input name="link"
            id="url"
            type="url"
            className="popup__input popup__input_type_url"
            placeholder="Ссылка на картинку"
            required />
          <span id="url-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm name="submit-deleting"
          title="Вы уверены?"
          btnValue="Да"
          nameForm="submit-deleting"
          onClose={closeAllPopups} >
        </PopupWithForm>
        <ImagePopup
          name='image-view'
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  ));
}

export default App;