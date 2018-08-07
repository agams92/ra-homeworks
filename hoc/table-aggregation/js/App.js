'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <SortedMonth list={this.state.list} />
                <SortedYear list={this.state.list} />
                <SortedTable list={this.state.list} />
            </div>
        );
    }
};

const SortedMonth = sortList(MonthTable, 'month');
const SortedYear = sortList(YearTable, 'year');
const SortedTable = sortList(SortTable, 'sort')

function sortList (Component, type) {
    function changeList (list) {
        const sortedList = list.map(item => {
            if (type === 'month') {
                const month = new Date(item.date).toLocaleDateString('en-US', {month: 'short'});
                return {month: month, amount: item.amount}
            } else if (type === 'year') {
                const year = new Date(item.date).getFullYear();
                return {year: year, amount: item.amount}
            } else { 
                return item;
            }
        })
        if (type === 'sort') {
            sortedList.sort(compateDates);
        }
        return sortedList;
    }

    function compateDates(a,b) {
        const first = new Date(a.date).getTime();
        const second = new Date(b.date).getTime();
        return first - second;
    }

    return class extends React.Component {
        render() {
            const sortedList = changeList(this.props.list);
            return <Component {...this.props} list={sortedList} />
        }
    }
}