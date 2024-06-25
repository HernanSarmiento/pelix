import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MoviesPages from '../pages/MoviesPage';
import SeriesPages from '../pages/SeriePage';
import Home from '../pages/Home';
import Serie from '../pages/Serie';
import Movie from '../pages/Movie';
import PageNotF from '../components/PageNotF';
import Header from '../components/Header';

export default function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movies' element={<MoviesPages />} />
                    <Route path='/series' element={<SeriesPages />} />
                    <Route path='/serie/:id' element={<Serie />} />
                    <Route path='/movie/:id' element={<Movie />} />
                    <Route path='*' element={<PageNotF />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}