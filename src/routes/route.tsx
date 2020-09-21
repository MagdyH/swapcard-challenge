import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import ArtistDetails from './artist-details';


function Router(): JSX.Element {
    return (
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/artist-details'} component={ArtistDetails} />
        </Switch>
    )
}

export default Router;