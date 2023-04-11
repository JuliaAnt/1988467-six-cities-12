import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import CommentForm from '../../components/comment-form/comment-form';
import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offer';
import ReviewsList from '../../components/reviews-list/reviews-list';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { CLASS_NAME_LIST, MAP_SIZE } from '../../const';
import { useState } from 'react';
import Map from '../../components/map/map';
import { CITIES_DATA } from '../../mocks/cities';

type Props = {
  offers: Offer[];
  selectedCity: string;
}

function OfferPage({ offers, selectedCity }: Props): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);

  const currentCity = CITIES_DATA.find((cityToFind) => cityToFind.name === selectedCity);

  const onPlaceCardHover = (activeId: number) => {
    const currentCard = offers.find((offer) => offer.id === activeId);
    setActiveCard(currentCard);
  };

  const { id: offerId } = useParams<{ id: string }>();
  const offer = offers.find((of) => of.id.toString() === offerId) || {} as Offer;
  const { price, images, title, isPremium, type, bedrooms, maxAdults, rating, goods, host, description, reviews } = offer;

  const placeCardList = <PlaceCardList className={CLASS_NAME_LIST.mainPage} offers={offers} onPlaceCardHover={onPlaceCardHover} />;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: property</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image, index) => {
                  const keyValue = index.toString();
                  return (
                    <div key={keyValue} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{isPremium ? 'Premium' : ''}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${100 / 5 * Math.round(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} ${bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} ${maxAdults === 1 ? 'adult' : 'adults'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((insideItem, index) => {
                      const keyValue = index.toString();
                      return (
                        <li key={keyValue} className="property__inside-item">
                          {insideItem}
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            {!!currentCity && <Map city={currentCity} points={offers} activeCard={activeCard} size={MAP_SIZE.offerPage} />}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {placeCardList}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
