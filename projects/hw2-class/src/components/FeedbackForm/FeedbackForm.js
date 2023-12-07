/* Imports */
import { Component } from "react";
import emojiScores from "../EmojiScores";
import HappinessPicker from "../HappinessPicker/HappinessPicker";
import "./FeedbackForm.css";

/* FeedbackForm component */
class FeedbackForm extends Component {
    state = {
        food: {
            selectedEmoji: '',
            score: 0,
        },
        service: {
            selectedEmoji: '',
            score: 0,
        },
        money: {
            selectedEmoji: '',
            score: 0,
        },
    };

    handleEmojiClick = (type, emoji, score) => {
        this.setState({
            [type]: {
                selectedEmoji: emoji,
                score,
            },
        });
    }

    renderHappinessPickerComponent = (type, subTotal, selectedEmoji) => {
        return(
            <div className="happiness-picker">
                {emojiScores.map((emoji, index) => <HappinessPicker key={`${type}-${index}`} emoji={emoji} onClick={() => this.handleEmojiClick(type, emoji, index)} value={subTotal} isSelected={emoji === selectedEmoji} />)}
            </div>
        );
    }

    render() {
        const totalScore = this.state.food.score + this.state.service.score + this.state.money.score;
        return(
            <>
                <h2>Food</h2>
                {this.renderHappinessPickerComponent("food", this.state.food.score, this.state.food.selectedEmoji)}
                {/* {emojiScores.map(({ id, emoji, score }) => <HappinessPicker key={id} emoji={emoji} onClick={() => this.handleEmojiClick("food", emoji, score)} value={score} isSelected={emoji === this.state.food.selectedEmoji} />)} */}
                <h2>Service</h2>
                {this.renderHappinessPickerComponent("service", this.state.service.score, this.state.service.selectedEmoji)}
                {/* {emojiScores.map(({ id, emoji, score }) => <HappinessPicker key={id} emoji={emoji} onClick={() => this.handleEmojiClick("service", emoji, score)} value={score} isSelected={emoji === this.state.service.selectedEmoji} />)} */}
                <h2>Value for money</h2>
                {this.renderHappinessPickerComponent("money", this.state.money.score, this.state.money.selectedEmoji)}
                {/* {emojiScores.map(({ id, emoji, score }) => <HappinessPicker key={id} emoji={emoji} onClick={() => this.handleEmojiClick("money", emoji, score)} value={score} isSelected={emoji === this.state.money.selectedEmoji} />)} */}
                <div className="total-score">Total Score: {totalScore}/12</div>
            </>
        )
    }
}

export default FeedbackForm;
