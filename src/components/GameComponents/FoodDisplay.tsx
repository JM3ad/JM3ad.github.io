import * as React from "react";
import { Species } from "../../logic/species";
import * as sanitize from "../../displayHelpers/displaySanitizer";

export class FoodDisplay extends React.Component<{ species : Species}> {

    constructor(props) {
        super(props);
    }

    render() {
        const species = this.props.species;
        return (
            <div className="header-value-display"> 
                <div className="label">Food: </div>
                <div className="value" id="food">{sanitize.Integer(species.food)}</div>
                <div className="rate">{sanitize.Number(species.getFoodIncreaseRate())}</div>
            </div>
        );

    }
}