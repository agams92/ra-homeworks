'use strict';

const LegendItem = ({label, labelIndex, colors}) => {
    return(
        <div>
            <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
            <span className="Legend--label">{ label }</span>
        </div>
    );
}