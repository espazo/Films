import React from "react";
import {RouteComponentProps} from "react-router";

interface IParams {
    id: string,
}

export default class extends React.Component<RouteComponentProps<IParams>> {
    render() {
        return (
            <h1>
                edit page
                {this.props.match.params.id}
            </h1>
        );
    }
}
