import * as React from "react";
import { Species } from "../../logic/species";
import * as sanitize from "../../displayHelpers/displaySanitizer";

export class DnaDisplay extends React.Component<{ species : Species}> {

    constructor(props) {
        super(props);
    }

    render() {
        const species = this.props.species;
        return (
            <div className="header-value-display">
                <div className="label">DNA: </div>
                <div className="value" id="dna">{sanitize.Integer(species.dna)}</div>
                <div className="increase">{sanitize.Integer(species.populationSize)}</div>
            </div>
        );
    }
}