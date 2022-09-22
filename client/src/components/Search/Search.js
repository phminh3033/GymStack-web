import classNames from 'classnames/bind'; //Allows to write class names with '-' => Ex: post-item
import styles from './Search.module.scss';

//React library
import { useState, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../redux/actions/postActions';

//materialUI library
import { Input } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

//component
import { SearchIcon } from '../Icon';

const cx = classNames.bind(styles);

function Search({ navigatePath }) {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const searchPosts = () => {
        if (search.trim()) {
            dispatch(getPostsBySearch(search));
            console.log(search);
            navigate(`${navigatePath}/search?searchQuery=${search || 'none'}`);
        } else {
            navigate(location);
        }
        setSearch('');
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPosts();
            console.log(search);
        }
    };
    return (
        <div className={cx('search')}>
            <div className={cx('search-icon')} onMouseDown={(e) => e.preventDefault()} onClick={searchPosts}>
                <SearchIcon />
            </div>
            <Input
                name="search"
                type="search"
                fullWidth
                placeholder="Search your posts..."
                value={search}
                onKeyDown={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default memo(Search);
