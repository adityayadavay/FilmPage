import { useState } from "react";
import EpisodeDetails from "./details/episodeDetails";
import EpisodeList from "./list/episodeList";
import './index.css';
import '../SearchBar/searchHome.css';
import SortBy from "../SearchBar/sortingButton/sortby";
import SearchText from "../SearchBar/textbox/searchText";
const EpisodeHome = () => {
    const [episodeId,setEpisodeId] = useState(0);
    const [searchText,setSearchText] = useState('');
    const [sortBy,setSortBy] = useState('year');
    return (
        <>
        <div className="searchcontainer">
        <SortBy sendSortToParent={setSortBy}/>
        <SearchText sendSearchText={setSearchText}/>
      </div>
        <div className="episodecontainer">
        <EpisodeList 
            sendIdToParent={setEpisodeId}
            searchText={searchText}
            sortBy={sortBy}
        />
        <EpisodeDetails episodeId={episodeId}/>
        </div>
        </>
    )
}
export default EpisodeHome;