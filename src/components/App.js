import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  
  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(!isImagePopupOpen);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  return ((
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
                minlength="2"
                maxlength="40"
                className="popup__input popup__input_type_name"
                placeholder="ФИО"
                required />
        <span id='name-error' className="popup__error"></span>
        <input name="job"
                id="job"
                type="text"
                minlength="2"
                maxlength="200"
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
        <span id="urlAvatarEdit-error" className="popup__error">Введите адрес</span>
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
                minlength="2"
                maxlength="30"
                className="popup__input popup__input_type_title"
                placeholder="Название"
                required />
        <span id="title-error" className="popup__error">Вы пропустили поле</span>
        <input name="link"
                id="url"
                type="url"
                className="popup__input popup__input_type_url"
                placeholder="Ссылка на картинку"
                required />
        <span id="url-error" className="popup__error">Введите адрес</span>
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
  ));
}

export default App;