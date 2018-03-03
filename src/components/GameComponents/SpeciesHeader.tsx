import * as React from "react";
import { Species } from "../../logic/species";
import { NameBox } from "./NameBox";
import { PopulationDisplay } from "./PopulationDisplay";
import { DnaDisplay } from "./DnaDisplay";

export class SpeciesHeader extends React.Component<{ species: Species }> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="species-header">
                <NameBox name={this.props.species.name} />
                <PopulationDisplay population={this.props.species.populationSize} />
                <DnaDisplay dna={this.props.species.dna} />
            </div>
        );

    }
}