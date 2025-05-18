import { useEffect, useState } from 'react';
import Romans from 'romans';
import './episodeList.css'

type Film = {
    title: string;
    episode_id: number;
    director: string;
    producer: string;
    release_date: string;
}
type EpisodeListProps = {
    sendIdToParent: (episodeId: number) => void;
    searchText: string,
    sortBy: string
};
const EpisodeList = (props: EpisodeListProps) => {
    const [films, setFilms] = useState<Film[]>([]);
    const [textSearch, setTextSearch] = useState('');
    const [sortBy, setSortBy] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.py4e.com/api/films/?format=json', {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    setFilms(data.results);
                }
            } catch (error) {

            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        setTextSearch(props.searchText.toLowerCase());
    }, [props.searchText]);

    useEffect(() => {
        setSortBy(props.sortBy);
    }, [props.sortBy]);

    const getFilms = () => {
        const filmsData = textSearch ? films.filter(film => film.title.toLowerCase().indexOf(textSearch) !== -1) : films;
        if (sortBy === 'year') {
            filmsData.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
        } else {
            filmsData.sort((a, b) => a.episode_id - b.episode_id);
        }

        return filmsData.map((film) => (
            <div onClick={() => passIdToParent(film.episode_id)} key={film.episode_id} className='filmitem'>
                <span >Episode {film.episode_id}</span>
                <span> Episode {Romans.romanize(film.episode_id)} - {film.title}</span>
                <span> {film.release_date}</span>
            </div>
        ));
    }
    const passIdToParent = (episodeId: number) => {
        props.sendIdToParent(episodeId);
    }
    return (
        <div className='episodelistcontainer'>
            {getFilms()}
        </div>
    );
}
export default EpisodeList;