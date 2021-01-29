import * as React from 'react';
import { Range,getTrackBackground } from 'react-range';
 
export default class RSlider extends React.Component {
  state = { values: [this.props.start] };
  onChange =(values)=>{
    this.setState({ values })
    this.props.setValue(values &&  values.length >0 ? values[0]:0)
  }
  render() {
      const min =this.props.min;
      const max =this.props.max;
    return (
      <Range
        step={100}
        min={min}
        max={max}
        values={this.state.values}
        onChange={values => this.onChange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '100%',
              background: getTrackBackground({
                values: this.state.values,
                colors: ["rgb(253, 126, 20)", "#ccc"],
                min: min,
                max: max
              }),
              alignSelf: "center"
            }}
          >
            {children}
          </div>
        )}
        
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '30px',
                width: '30px',
                backgroundColor: 'rgb(253, 126, 20)',
                borderRadius: '50%',
                border: '3px solid #fff',
              backgroundColor: '#fd7e14'
            }}
          />
        )}
      />
    );
  }
}