import * as React from "react";
import { SpeciesBox } from "./GameComponents/SpeciesBox";
import { SpeciesHeader } from "./GameComponents/SpeciesHeader";
import { DnaBox } from "./GameComponents/DnaBox";
import { GatherButton } from "./GameComponents/GatherButton";
import { NewsFeed } from "./GameComponents/NewsFeed";
import { Game } from "../logic/game";

export interface GameAreaProps { }
interface GameAreaState { game: Game, interval: number }

export class GameArea extends React.Component<GameAreaProps, GameAreaState>{

    constructor(props) {
        super(props);
        this.state = {
            game: new Game(),
            interval: 0
        };
        this.state.game.startGame();
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.setState({ interval: window.setInterval(this.tick, 400) })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    tick() {
        const game = this.state.game;
        this.setState({ game: game });
    }

    render() {
        const species = this.state.game.species;
        return (
            <div id="game-container">
                <SpeciesHeader species={species} />
                <div id="game-sections-container">
                    <SpeciesBox species={species} />
                    <GatherButton species={species} />
                    <DnaBox species={species} />
                </div>
                <NewsFeed game={this.state.game}/>
            </div>
        );
    }
}