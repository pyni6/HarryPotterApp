import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/CharsTable">
            <button id="startHL">start</button>
          </Link>
        </div>
      </div>
    );
  }
}
