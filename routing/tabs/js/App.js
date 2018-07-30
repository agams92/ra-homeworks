'use strict';

class App extends React.Component {
    render() {
        const tabs = [ {path: '/', descr: 'Рефераты'}, {path:'/creator', descr: 'Криэйтор'}, {path:'/fortune', descr: 'Гадалка'}];
        const tabsToRender = tabs.map(tab => {
            let exact;
            if (tab.path === '/') exact = true;
            return <NavLink exact ={exact} className="tabs__item" to={tab.path} activeClassName='tabs__item-active'>{tab.descr}</NavLink>
        });
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
