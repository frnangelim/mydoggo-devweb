import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import routes from "./../routes.js";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // !isAuthenticated {
        //     this.props.history.push('/login');
        // }
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "main") {
                return (
                    <Route
                        path={prop.path}
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
            <div className="wrapper">
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <Switch>{this.getRoutes(routes)}</Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);
