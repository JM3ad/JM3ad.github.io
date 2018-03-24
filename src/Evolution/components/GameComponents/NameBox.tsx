import * as React from "react";


export class NameBox extends React.Component<{ name: string }> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="name-box">
                {this.props.name}
            </div>
        );

    }
}