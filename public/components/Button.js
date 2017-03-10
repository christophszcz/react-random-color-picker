var React = require('react');

var Button = React.createClass({
	render: function () {
		return (
			<button 
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
});

module.exports = Button;