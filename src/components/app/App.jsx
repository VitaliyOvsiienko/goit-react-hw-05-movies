import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Container from "components/container/Container";
import Navigation from "components/navigation/Navigation";
import Loader from "components/loader/Loader";

const Home = lazy(() => import('../../pages/home/Home'));
const Movies = lazy(() => import('../../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../../pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('../../pages/cast/Cast'));
const Reviews = lazy(() => import('../../pages/reviews/Reviews'));

const App = () => {
    return (
        <Container>
            <Navigation />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

            </Suspense>
        </Container>
    );
};

export default App;