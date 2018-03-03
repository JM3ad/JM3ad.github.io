import * as React from "react";
import { Stats } from "../../logic/stats";

export class StatsRows extends React.Component<{ stats: Stats }> {

    constructor(props) {
        super(props);
    }

    render() {
        let stats = [];
        this.props.stats.stats.forEach(stat => {
            stats.push(
                <div className="stat-row">
                    <div className="value-display">
                        <div className="label">{stat.getName()}</div>
                        <div className="value">{stat.getValue()}</div>
                    </div>
                    <div className="changes">
                        </div>
                </div>
            )
        })

        return (
            <div className="stats-rows">
                {stats}
            </div>
        );

    }
}