import * as React from "react";

interface TitleProps { startGameHandler };

export class TitlePage extends React.Component<TitleProps>{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="title-container">
                <div id="title">
                    <h2>
                        EVOLUTION
                    </h2>
                </div>
                <button id="start-game-button" className="btn" onClick={this.props.startGameHandler}>Start Game</button>
            </div>
        );
    }

    
}