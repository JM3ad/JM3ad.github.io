import * as React from "react";
import {Title, PageProps} from "../../SuperRoot";

export class TitlePage extends React.Component<PageProps>{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="title-container">
                <div id="title">
                    <h2>
                        Jack Mead
                    </h2>
                </div>
            <button id="evolution" onClick={this.props.loadEvolution}>Start Game</button>
            </div>
        );
    }

    
}