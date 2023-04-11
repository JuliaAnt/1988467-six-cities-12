import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {

  const filteredOffers = useAppSelector((state) => state.filteredOffers);
  const allOffers = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.city);
  const selectedSortType = useAppSelector((state) => state.sortType);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if(isOffersDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<MainPage rentalOffersCount={filteredOffers.length} offers={filteredOffers} selectedCity={selectedCity} selectedSortType={selectedSortType} />} />
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesPage offers={allOffers} />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Room} element={<OfferPage offers={filteredOffers} selectedCity={selectedCity} />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
