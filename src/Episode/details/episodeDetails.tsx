import { useEffect, useState } from "react";
import Romans from 'romans';
import './episodetailscontainer.css'

type EpisodeDetailsObj = {
    episodeId: number
}
type FilmObject = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
}
const EpisodeDetails = (props: EpisodeDetailsObj) => {
    const [filmDetails, setFilmDetails] = useState<FilmObject | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            if (props.episodeId) {
                const response = await fetch(`https://swapi.py4e.com/api/films/${props.episodeId}/?format=json`, {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    setFilmDetails(data);
                }
            }
        }
        fetchData()
    }, [props.episodeId])
    return (
        filmDetails ?
            <div className="episodetailscontainer">
                <h2>Episode {Romans.romanize(filmDetails.episode_id)} - {filmDetails.title}</h2>
                <div>
                    <p>
                        {filmDetails.opening_crawl}
                    </p>
                    <p>Directed By {filmDetails.director}</p>
                </div>
            </div> : null
    );
}

export default EpisodeDetails;
