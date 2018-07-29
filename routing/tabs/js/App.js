'use strict';

class App extends React.Component {
    render() {
        const tabs = [ {name: '/', descr: 'Рефераты'}, {name:'/creator', descr: 'Криэйтор'}, {name:'/fortune', descr: 'Гадалка'}];
        const tabsToRender = tabs.map(tab => <NavLink exact className="tabs__item" to={tab.name} activeClassName='tabs__item-active'>{tab.descr}</NavLink>);
        return(
            <Router>
                <div className="tabs">
                    <nav className="tabs__items">
                        {tabsToRender}
                    </nav>
                    <div className="tabs__content">
                        <Switch>
                            <Route path='/creator' component={Creator} />
                            <Route path='/fortune' component={Fortune} />
                            <Route path='/' component={Essay} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
} 
