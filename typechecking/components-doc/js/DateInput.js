'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.defaultProps = {
  value: getCurrentDate()
}

DateInput.propTypes = {
  value: (props, propName, componentName) => {
    if (/\d+\-\d+\-\d/g.test(props[propName])) return null;
    return new Error(`Invalid '${propName}' in '${componentName}. Expected 'xxxx-xx-xx'.`);
  }
}

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}
