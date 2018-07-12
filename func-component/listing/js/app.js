'use strict';
let xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    if(xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        renderElements(data);
    }
})
xhr.open('GET','https://neto-api.herokuapp.com/etsy');
xhr.send()

function renderElements(data) {
    ReactDOM.render(
        <App items={data} />, 
        document.getElementById('root')
    );
}

const App = ({items}) => {
    const allItems = items.map(item => (
        <AppItem item={item} />
    ))
    return(
        <div className="item-list">
            {allItems}
        </div>
    );
}



const AppItem = ({item}) => {
    const currency = getItemCurrency(item.currency_code);
    const quantityClass = getItemQuantityClass(item.quantity);
    const title = getItemTitle(item.title);
    return(
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{currency}{item.price}</p>
                <p className={`item-quantity ${quantityClass}`}>{item.quantity} left</p>
            </div>
        </div>
    );
}

function getItemCurrency(currency) {
    if(currency === 'USD') return '$';
    else if(currency === 'EUR') return '€';
    return `${currency} `;
}

function getItemQuantityClass(quantity) {
    if(quantity <= 10) return 'level-low';
    else if(quantity <= 20) return 'level-medium';
    return 'level-high';
}

function getItemTitle(title) {
    if(title.length > 50) {
        return `${title.slice(0, 49)}...`;
    }
    return title;
}