import * as React from "react";
import { Species } from "../../logic/species";
import { NameBox } from "./NameBox";
import { PopulationDisplay } from "./PopulationDisplay";
import { DnaDisplay } from "./DnaDisplay";
import { FoodDisplay } from "./FoodDisplay";

export class DnaBox extends React.Component<{ species: Species }> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dna-box">
                <PopulationDisplay species={this.props.species} />
                <DnaDisplay species={this.props.species} />
                <FoodDisplay species={this.props.species} />
            </div>
        );

    }
}