import React from 'react';

class SquareColorToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRed: true,
      isBlue: false,
    };
  }

  handleClick = () => {
    this.setState({
      isRed: !this.state.isRed,
      isBlue: !this.state.isBlue,
    });
  };

  render() {
    const { isRed, isBlue } = this.state;

    const redSquareStyle = {
      width: '100px',
      height: '100px',
      backgroundColor: isRed ? 'red' : 'blue',
    };

    const blueSquareStyle = {
      width: '100px',
      height: '100px',
      backgroundColor: isBlue ? 'red' : 'blue',
    };

    return (
      <div>
        <button className='red'
          style={redSquareStyle}
          onClick={() => this.handleClick('isRed')}
        ></button>
        <button className='blue'
          style={blueSquareStyle}
          onClick={() => this.handleClick('isBlue')}
        ></button>
      </div>
    );
  }
}

export default SquareColorToggle;