import * as React from "react";
import { Species } from "../../logic/species";
import { Stat } from "../../logic/stats";

export class StatsRows extends React.Component<{ species: Species }> {

    constructor(props) {
        super(props);
    }

    render() {
        let stats = [];
        this.props.species.stats.stats.forEach(stat => {
            stats.push(
                <div className="stat-row" key={stat.getName()}>
                    <div className="value-display">
                        <div className="label">{stat.getName()}</div>
                        <div className="value">{stat.getValue()}</div>
                    </div>
                    <div className="purchases">
                        <div className="buy">{this.getBuyButton(stat)}</div>
                        <div className="sell">{this.getSellButton(stat)}</div>
                    </div>
                </div>
            )
        })

        return (
            <div className="stats-rows">
                <div className="stat-header-row">
                    <div className="value-display">
                        <div className="label">Stat:</div>
                        <div className="value">Value:</div>
                    </div>
                    <div className="purchases">
                        <div className="buy">Increase:</div>
                        <div className="sell">Decrease:</div>
                    </div>
                </div>
                {stats}
            </div>
        );
    }

    getBuyButton(stat: Stat) {
        return <button onClick={this.increaseHandler.bind(this, stat)}>{stat.getCost()}</button>;
    }

    getSellButton(stat: Stat) {
        return <button onClick={this.decreaseHandler.bind(this, stat)}>Sell</button>;
    }

    increaseHandler(stat: Stat) {
        this.props.species.increaseStat(stat.getName());
    }

    decreaseHandler(stat: Stat) {
        this.props.species.decreaseStat(stat.getName());
    }
}