import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setIsSelectedCard] = useState({});
  const [currentUser, setCorrentUser] = useState(null);

  useEffect(() => {
    api.getUserData()
      .then(currentUser => {
        setCorrentUser(currentUser);
      })
  }, [])

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

  function handleUpdateUser(data) {
    console.log('app', data)
    api.setUserData(data);
    setCorrentUser(data);
      closeAllPopups();
  }

  return ((
    <div id="page" className="page">
      <div id="page__content" className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
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
        </CurrentUserContext.Provider>
      </div>
    </div>
  ));
}

export default App;