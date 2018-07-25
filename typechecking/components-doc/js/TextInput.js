'use strict';

const TextInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required}/>
    </div>
  )
};


TextInput.propTypes = {
  value: (props, propName, componentName) => {
    if (props.type === 'email') {
      if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(props[propName]))) {
        return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Expecting something like 'xx@xx.com'. Validation failed.`);
      }
      return null;
    }
    if (props.type === 'text') {
      if (typeof props.value === 'string') return null;
      return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Expecting string, got ${typeof(props[propName])}. Validation failed.`);
    }
  }
}