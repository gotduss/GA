/* Imports */
import { Component } from "react";
import AudioPlayer from "../AudioPlayer";

/* Jukebox component */
class Jukebox extends Component {
    state = {
        currentSongUrl: '',
        currentSongTitle: '',
    }
    
    chooseSong = (currentSongUrl, currentSongTitle) => {
        this.setState({
            currentSongUrl,
            currentSongTitle,
        });
    }

    chooseSongBtn = (currentSongUrl, currentSongTitle) => {
        return (
            <button onClick={() => this.chooseSong(currentSongUrl, currentSongTitle)}>{currentSongTitle}</button>
        );
    }

    render() {
        return (
            <div>
                <p>{this.chooseSongBtn('', 'Disable Audio')}</p>
                {/* <p><button onClick={() => this.chooseSong('')}>Disable Audio</button></p> */}
                <span>Play song: </span>
                {this.chooseSongBtn('/songs/fantasy-classical.mp3', 'Fantasy Classical')}
                {this.chooseSongBtn('/songs/gates-of-heaven.mp3', 'Gates of Heaven')}
                {this.chooseSongBtn('/songs/grand-orchestra.mp3', 'Grand Orchestra')}
                {this.chooseSongBtn('/songs/piano-song.mp3', 'Piano Song')}
                {/* <button onClick={() => this.chooseSong('/songs/fantasy-classical.mp3')}>Fantasy Classical</button>
                <button onClick={() => this.chooseSong('/songs/gates-of-heaven.mp3')}>Gates of Heaven</button>
                <button onClick={() => this.chooseSong('/songs/grand-orchestra.mp3')}>Grand Orchestra</button>
                <button onClick={() => this.chooseSong('/songs/piano-song.mp3')}>Piano Song</button> */}
                
                { this.state.currentSongUrl === '' ? <p>Audio disabled</p> : <AudioPlayer 
                    audioTitle={this.state.currentSongTitle}
                    audioURL={this.state.currentSongUrl}
                /> }
            </div>
        );
    }
}

export default Jukebox;
