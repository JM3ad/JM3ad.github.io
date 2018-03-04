import * as React from "react";

export class DnaDisplay extends React.Component<{ dna : number}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-value-display">
                <div className="label">DNA: </div>
                <div className="value" id="dna">{this.props.dna}</div>
            </div>
        );

    }
}