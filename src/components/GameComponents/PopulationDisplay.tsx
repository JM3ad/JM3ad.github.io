import * as React from "react";

export class PopulationDisplay extends React.Component<{population: number}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="value-display">
                <div className="label">Population: </div>
                <div className="value" id="population">{this.props.population}</div>
            </div>
        );

    }
}