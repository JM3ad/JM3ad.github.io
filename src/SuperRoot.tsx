import * as React from "react";
import { Root as MainRoot } from "./Main/components/Root";
import { Root as EvolutionRoot } from "./Evolution/components/Root"

export enum Title {
    Main,
    Evolution
}

export interface PageProps { loadEvolution: ()=>void, loadMain: ()=>void};
interface PageToShow { title: Title};

export class SuperRoot extends React.Component<{},PageToShow> {

    constructor(props) {
        super(props);
        this.state = {
            title: Title.Main
        };

        this.loadEvolution = this.loadEvolution.bind(this);
        this.loadMain= this.loadMain.bind(this);
    }

    render() {
        const props = {loadEvolution : this.loadEvolution, loadMain : this.loadMain};
        const root = this.state.title==Title.Main? <MainRoot {...props}/>:<EvolutionRoot {...props}/>;
        return (root);
    }

    loadEvolution(){
        this.setState({
            title: Title.Evolution
        })
    }

    loadMain(){
    this.setState({
    title:Title.Main
        })
    }
}
