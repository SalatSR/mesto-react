import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import api from './../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
  }, []);

  function handleCardLike(card) {

    function setLikeCardStatus(newCard) {
      setCards((state) => state.map(c => c._id === card._id ? newCard : c));
    }
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    if (!isLiked) {
      // Отправляем запрос в API и получаем обновлённые данные карточки
      api.likeCard(card._id)
        .then((newCard) => {
          setLikeCardStatus(newCard);
        });
    } else {
      api.unlikeCard(card._id)
        .then((newCard) => {
          setLikeCardStatus(newCard);
        });
    }
  }

  function handleCardDelete(card) {
    const newArray = cards.filter(item => {
            return item._id !== card._id;
          })
    api.deleteCard(card._id)
      .then(setCards(newArray))
  }

  return ((
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-wrapper">
            <button
              onClick={onEditAvatar}
              type="button"
              className="profile__avatar-edit-button"
              aria-label="edit avatar button">
            </button>
            <img src={currentUser?.avatar}
              alt="ваше фото в профиле"
              className="profile__avatar-img" />
          </div>
          <div className="profile__text">
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__edit-button"
              aria-label="edit profile button">
            </button>
            <h1 className="profile__info-name">{currentUser?.name}</h1>
            <p className="profile__info-job">{currentUser?.about}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
          aria-label="add profile button">
        </button>
      </section>

      <section className="cards">
        {cards.map((card) => {
          return ((
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete} />
          ))
        })}
      </section>
    </main>
  ));
}

export default Main;