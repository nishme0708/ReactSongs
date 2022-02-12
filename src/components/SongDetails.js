import React from 'react';
import { connect } from 'react-redux';
import SongList from './SongList';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>No song selected</div>;
    } else {
        return (
            <div>
                <h3>Details for: </h3>
                <p>Title: {song.title}</p>
                <p>Duration: {song.duration}</p>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        song: state.selected
    };
};

export default connect(mapStateToProps)(SongDetail);
