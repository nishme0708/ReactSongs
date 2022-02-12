import { combineReducers } from 'redux';
export const songsReducer = () => {
    return [
        {
            title: 'Song 1',
            duration: '4:05'
        },
        {
            title: 'Song 2',
            duration: '5:31'
        },
        {
            title: 'Song 3',
            duration: '2:00'
        },
        {
            title: 'Song 4',
            duration: '3:05'
        }
    ];
};

export const songSelectedReducer = (songselected = null, action) => {
    if (action.type == 'SONG_SELECTED') {
        return action.payload;
    }
    return songselected;
};

export default combineReducers({
    songs: songsReducer,
    selected: songSelectedReducer
});
