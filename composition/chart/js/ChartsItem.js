'use strict';

const ChartsItem = ({type, style, itemIndex, color, item}) => {
    return(
        <div className={`Charts--item ${type}`} style={ style } key={ itemIndex }>
                <b style={{ color: color }}>{ item }</b>
        </div>
    )
}