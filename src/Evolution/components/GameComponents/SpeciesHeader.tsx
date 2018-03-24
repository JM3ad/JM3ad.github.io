import * as React from "react";
import { Species } from "../../logic/species";
import { NameBox } from "./NameBox";

export class SpeciesHeader extends React.Component<{ species: Species }> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="species-header">
                <NameBox name={this.props.species.name} />
            </div>
        );

    }
}