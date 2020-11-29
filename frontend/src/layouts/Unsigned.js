import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import routes from "../routes.js";

class Unsigned extends Component {

    componentDidMount() {
        // isAuthenticated {
        //     this.props.history.push('/home');
        // }
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "unsigned") {
                return (
                    <Route
                        path={'/auth' + prop.path}
                        render={props => (
                            <prop.component
                                {...props}
                            />
                        )}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    render() {
        return (
            <div>
                <Switch>{this.getRoutes(routes)}</Switch>
            </div>
        );
    }
}

export default withRouter(Unsigned);
