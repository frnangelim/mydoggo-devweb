import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import routes from "./../routes.js";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.mainPanel = React.createRef();
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
                        path={'/app' + prop.path}
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
                <div id="main-panel" className="main-panel" ref={this.mainPanel}>
                    <Switch>{this.getRoutes(routes)}</Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);
