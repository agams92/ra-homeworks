'use strict';

const Legend = ({labels, colors}) => {
    const labelsToRender = labels.map((label, labelIndex) => {
        return (
            <LegendItem label={label} labelIndex={labelIndex} colors={colors}/>
        );
    })
    return(
        <div className="Legend">
            { labelsToRender }
    	</div>
    );
}