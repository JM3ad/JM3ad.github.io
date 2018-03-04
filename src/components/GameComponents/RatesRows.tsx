import * as React from "react";
import { Species } from "../../logic/species";

export class RatesRows extends React.Component<{ species: Species }> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="stats-rows">
                <div className="stat-header-row">
                    <div className="label">Gather Rate:</div>
                    <div className="value">{this.props.species.getGatherRate()}</div>
                </div>
                <div className="stat-header-row">
                    <div className="label">Consumption Rate:</div>
                    <div className="value">{this.props.species.getConsumptionRate()}</div>
                </div>
                
            </div>
        );
    }
}