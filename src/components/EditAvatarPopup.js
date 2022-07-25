import { useState, useEffect, useContext, useRef } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const currentUser = useContext(CurrentUserContext);
  const [value, setValue] = useState(null);

  const avatarRef = useRef();

  useEffect(() => {
    console.log('useEffect0', currentUser)
    if (currentUser) {
      setValue(currentUser.avatar);
    }
  }, [currentUser])

  function handleLinkChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit', avatarRef)
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    // onUpdateAvatar({
    //   avatar: avatarRef.current.value,
    // });
  }

  return ((
    <PopupWithForm
      name="avatar-edit"
      title="Обновить аватар"
      nameForm="avatar-edit"
      btnValue="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input name="link"
        id="urlAvatarEdit"
        type="url"
        className="popup__input popup__input_type_url-avatar"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
        value={value || ''}
        onChange={handleLinkChange}
      />
      <span id="urlAvatarEdit-error" className="popup__error"></span>
    </PopupWithForm>
  ));
}

export default EditAvatarPopup;