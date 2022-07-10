import {useState, useEffect} from 'react';
import api from './../utils/api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserData()
        .then((res) => {
          setUserName(res.name);
          setUserDescription(res.about);
          setUserAvatar(res.avatar);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        })
  }, []);

  useEffect(() => {
    api.getInitialCards()
        .then((cards) => {
          setCards(cards);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        })
  }, []);
  
  return((
    <main className="content">
      <section className="profile">
        <div className="profile__info">
        <div className="profile__avatar-wrapper">
          <button onClick={onEditAvatar} type="button" className="profile__avatar-edit-button" aria-label="edit avatar button"></button>
          <img src={userAvatar}
                alt="ваше фото в профиле"
                className="profile__avatar-img" />
        </div>
        <div className="profile__text">
          <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="edit profile button"></button>
          <h1 className="profile__info-name">{userName}</h1>
          <p className="profile__info-job">{userDescription}</p>
        </div>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="add profile button"></button>
      </section>

      <section className="cards">
        {cards.map((card) => {
          return((
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))
        })}
      </section>
    </main>
  ));
}

export default Main;