import * as React from "react";
import { Species } from "../../logic/species";


interface SpeciesProps { species: Species; }

export class GatherButton extends React.Component<SpeciesProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="gather-button">
                <button onClick={this.props.species.gatherFood}>GATHER FOOD</button>
            </div>
        );
    }


}