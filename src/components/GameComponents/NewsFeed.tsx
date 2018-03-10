import * as React from "react";
import { Game } from "../../logic/game";

export class NewsFeed extends React.Component<{ game: Game }>{

    constructor(props) {
        super(props);
    }

    render() {
        const messages = this.props.game.log.messages;
        let messageElements = []
        messages.forEach((message, index) => {
            messageElements.push(
                <div className="message" key={index}>{message}</div>
            )
        })

        return (
            <div id="news-feed-container">
                <span id="news-feed-title">Events:</span>
                {messageElements}
            </div>
        );
    }
}