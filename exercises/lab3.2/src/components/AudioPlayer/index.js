/* Imports */
import { Component } from "react";

/* AudioPlayer component */
class AudioPlayer extends Component {
    state = {
        status: "paused",
    };

    audioElement = new Audio(this.props.audioURL);

    componentDidMount = () => {
        console.log("Mounted");
        this.audioElement.addEventListener('ended', () => {
            this.setState({ status: "paused" });
        });
    }
    
    componentDidUpdate = (prevProps) => {
        console.log("Updated");
        console.log("audioElement", this.audioElement.currentTime);
        if (prevProps.audioURL !== this.props.audioURL) {
            this.audioElement.pause();
            this.audioElement = new Audio(this.props.audioURL);

            if (this.props.isPlaying) {
                this.audioElement.play();
                this.setState({ status: "playing" });
            } else {
                this.setState({ status: "paused" });
            }
        }
    }
    
    componentWillUnmount = () => {
        console.log("Unmounted");
        this.audioElement.pause();
    }
    
    togglePlayPause = () => {
        if (this.state.status === "playing") {
            this.audioElement.pause();
            this.setState({ status: "paused" });
        } else {
            this.audioElement.play();
            this.setState({ status: "playing" });
        }
    };

    render() {
        return (
            <div>
                <p>Playing: {this.props.audioTitle} - {this.props.audioURL}</p>
                <button onClick={this.togglePlayPause}>
                    {this.state.status === "playing" ? 'Pause' : 'Play'}
                </button>
                {this.audioElement.currentTime === this.audioElement.duration ? (<p>Song has ended</p>) : ''}
            </div>
        );
    }
}

export default AudioPlayer;
