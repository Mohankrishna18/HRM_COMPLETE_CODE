import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function MapAllowedRoutes({routes, basePath}) {
	const match = useRouteMatch(basePath);
	return (
		<Switch>
			{routes.map((route) => {
				const { path, component: Component, title, permission, ...rest } = route;
				return (
					<Route {...rest} key={path} path={`${match.path}${path}`}>
						<Component />
					</Route>
				)
			})}
		</Switch>
	)
}

export default memo(MapAllowedRoutes);