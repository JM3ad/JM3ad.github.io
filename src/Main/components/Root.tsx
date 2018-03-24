import * as React from "react";
import { TitlePage } from "./TitlePage";
import {Title, PageProps} from "../../SuperRoot";

export class Root extends React.Component<PageProps> {

    constructor(props) {
        super(props);
    }

    render() {
        return (<TitlePage {...this.props}/>
        );
    }
}
