import * as React from "react";
import { TitlePage } from "./TitlePage";
import { GameArea } from "./GameArea";

interface GameStartedState { hasGameStarted: boolean };

export class Root extends React.Component<{}, GameStartedState> {

    constructor(props) {
        super(props);
        this.state = {
            hasGameStarted: false
        };
        this.startGameHandler = this.startGameHandler.bind(this);
    }

    render() {
        if (this.state.hasGameStarted) {
            return <GameArea />
        }

        return (<TitlePage startGameHandler={this.startGameHandler} />
        );
    }

    startGameHandler() {
        this.setState({ hasGameStarted: true });
    }
}
