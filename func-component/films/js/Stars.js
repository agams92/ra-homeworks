'use strict';

function Stars({count}) {
  if(count < 1 || count > 5 || !isNumber(count)) {
    return null;
  }
  const starsAmount = [];
  for (let i = 0; i < count; i++) {
    starsAmount.push(<li><Star /></li>);
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {starsAmount}
    </ul>
  );
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}