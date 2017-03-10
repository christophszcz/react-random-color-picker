var React = require('react');
var Button = require('./Button');

var Random = React.createClass({

  getInitialState: function () {
    return {
      color: [17, 131, 254]
    };
  },

  handleClick : function(){
    this.setState({
      color: this.chooseColor()
    });
  },

  componentDidMount: function () {
    this.applyColor();
  },

  componentDidUpdate: function (prevProps, prevState) {
    this.applyColor();
  },

  formatColor: function (ary) {
    return 'rgb(' + ary.join(', ') + ')';
  },

  isLight: function () {
    var rgb = this.state.color;
    return rgb.reduce(function(a,b){ return a+b; }) < 127 * 3;
  },

  applyColor: function () {
    var color = this.formatColor(this.state.color);
    document.body.style.background = color;
  },

  chooseColor: function () {
    for (var i = 0, random = []; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random; 
  },

  render: function () {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Do You Need Some Color Inspiration?
        </h1>
        <h2 className={this.isLight() ? 'white' : 'black'}>
          {this.formatColor(this.state.color)}
        </h2>
        <Button light={this.isLight()} onClick={this.handleClick}/>
      </div>
    );
  }
});

module.exports = Random;