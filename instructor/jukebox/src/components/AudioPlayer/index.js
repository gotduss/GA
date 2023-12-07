import { Component } from 'react'

export default class AudioPlayer extends Component {
  state = {
    isPaused: false,
  }

  pauseResumeMusic = () => {
    this.setState({ isPaused: !this.state.isPaused })
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.audioElement = new Audio(this.props.audioURL)
    this.audioElement.autoplay = true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')

    if (prevProps.audioURL !== this.props.audioURL) {
      this.audioElement.src = this.props.audioURL
      if (this.state.isPaused) {
        this.setState({ isPaused: false })
      }
    }

    this.state.isPaused ? this.audioElement.pause() : this.audioElement.play()
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.audioElement.pause()
  }

  render() {
    console.log('render')
    return (
      <div>
        <p>Playing {this.props.audioURL}</p>
        <button onClick={this.pauseResumeMusic}>
          {this.state.isPaused ? 'Play' : 'Pause'}
        </button>
      </div>
    )
  }
}
