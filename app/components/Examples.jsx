const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Belgrade'>Belgrade, Serbia</Link>
        </li>
        <li>
          <Link to='/?location=Paris'>Paris, France</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
