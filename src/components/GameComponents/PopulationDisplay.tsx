import * as React from "react";
import { Species } from "../../logic/species";
import * as sanitize from "../../displayHelpers/displaySanitizer";

export class PopulationDisplay extends React.Component<{species: Species}> {

    constructor(props) {
        super(props);
    }

    render() {
        const species = this.props.species;
        return (
            <div className="header-value-display">
                <div className="label">Population: </div>
                <div className="value" id="population">{sanitize.Integer(species.populationSize)}</div>
                <div className="rate"> {sanitize.Number(species.getPopulationIncreaseRate() + species.getFoodIncreaseRate()/50)}</div>
            </div>
        );

    }
}