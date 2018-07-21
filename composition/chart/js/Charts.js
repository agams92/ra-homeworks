'use strict';

const Charts = props => {
    const {data, colors, labels, series, max, type} = props;
    const chartsClass = type === 'horizontal' ? type : '';
    
    const chartsToRender = data.map((serie, serieIndex) => {
        const sortedSerie = serie.slice(0);
        sortedSerie.sort(compareNumbers);
        const sum = serie.reduce((carry, current) => carry + current, 0);
        const serieStyle = type === 'horizontal' ? {height: 'auto'} : {height: 250};
        const serieLabel = type === 'horizontal' ? series[serieIndex] : labels[serieIndex];
        const serieClass = type === 'horizontal' ? '' : type;
        const addProps = {
            serie: serie,
            serieClass: serieClass,
            serieLabel: serieLabel,
            serieStyle: serieStyle,
            serieIndex: serieIndex,
            sortedSerie: sortedSerie,
            sum: sum
        }
        const serieProps = Object.assign({}, props, addProps);
        return (
            <ChartsSerie {...serieProps}/>
        );
    })
    return(
        <div className={`Charts ${chartsClass}`}>
            { chartsToRender } 
        </div>
    )
}