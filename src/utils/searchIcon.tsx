import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchIcon = () => {
  return (
    <div className='icon'>
      <FontAwesomeIcon icon={faMagnifyingGlass} size={'1x'} color={'grey'}/>
    </div>
  );
};

export default SearchIcon;
