'use strict';

const ChartsSerie = props => {
    const {serie, serieClass, serieIndex, serieLabel, serieStyle, colors, itemIndex, sum, max, type, sortedSerie} = props;
    const chartItemsToRender = serie.map((item, itemIndex) => {
        const color = colors[itemIndex];
        const size = type === 'stacked' ? (item / sum * 100) : (item / max * 100);
        const style = {
            backgroundColor: color,
            opacity: type === 'stacked' ? 1 : item/max + .05,
            zIndex: item,
            height: type === 'horizontal' ? '' : size + '%',
            width: type === 'horizontal' ? size + '%' : '',
            right: type === 'layered' ? ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%' : ''
        };
        const itemProps = {
            type: type,
            style: style,
            itemIndex: itemIndex,
            color: color,
            item: item
        }
        return (
            <ChartsItem {...itemProps}/>
        );
    })
    return (
        <div className={`Charts--serie ${serieClass}`} key={ serieIndex } style={ serieStyle}>
                <label>{ serieLabel }</label>
                { chartItemsToRender }
        </div>
    )
}