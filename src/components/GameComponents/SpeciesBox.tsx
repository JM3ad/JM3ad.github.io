import * as React from "react";
import { Species } from "../../logic/species";
import { PopulationDisplay } from "./PopulationDisplay";
import { DnaDisplay } from "./DnaDisplay";
import { StatsRows } from "./StatsRows";
import { RatesRows } from "./RatesRows";


interface SpeciesProps { species: Species; }

export class SpeciesBox extends React.Component<SpeciesProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="species-box">
                <RatesRows species={this.props.species} />
                <br/>
                <StatsRows species={this.props.species} />
            </div>
        );

    }
}