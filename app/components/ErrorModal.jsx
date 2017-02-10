const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    const {title, message} = this.props;
    const modal = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
    const $modal = $(ReactDOMServer.renderToString(modal));
    const $el = $(ReactDOM.findDOMNode(this));

    $el.html($modal);

    this.modal = new Foundation.Reveal($('#error-modal'));
    this.modal.open();
  },
  render: function () {
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
