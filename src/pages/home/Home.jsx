import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "serviceApi/api-movies";
import MoviesEditorList from "components/moviesEditorList/MoviesEditorList";
import Loader from "components/loader/Loader";
import styles from './Home.module.css'

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTrending = async () => {
            setLoading(true);
            try {
                const { results } = await fetchTrendingMovies();
                setMovies(results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTrending();
    }, []);
    return (
        <main>
            {loading && <Loader />}
            <h1 className={styles.title}>Tranding today</h1>
            {movies && <MoviesEditorList movies={movies} />}
            {error && <p>Houston we have a problem</p>}
        </main>
    );
};

export default Home;