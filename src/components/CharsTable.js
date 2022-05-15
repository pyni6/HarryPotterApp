import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CharsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  handleChange(event) {
    var filter, table, tr, i, j;
    filter = document.getElementById('filterInput').value.toLowerCase();
    table = document.getElementById('charsTable');
    tr = table.getElementsByTagName('tr');
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = 'none';
      const tdArray = tr[i].getElementsByClassName('nameColumn');
      for (j = 0; j < tdArray.length; j++) {
        const cellValue = tdArray[j];
        if (
          cellValue &&
          //  cellValue.innerHTML.toLowerCase().indexOf(filter) > -1
          cellValue.innerHTML.toLowerCase().substring(24).includes(filter)
        ) {
          tr[i].style.display = '';
          break;
        }
      }
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div id="HPCharacters" className="HPCharacters">
        <input
          type="text"
          id="filterInput"
          className="inputFilter"
          onKeyUp={this.handleChange}
          placeholder="Search for names.."
        />
        <div>
          <table className="center" id="charsTable">
            <tr className="header">
              <th>Character Picture</th>
              <th>Character Name</th>
            </tr>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt="charPicture" className="photo" />
                </td>
                <td className="nameColumn">
                  <Link to="/CharsDetails" state={{ ...item }}>
                    {item.name}
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
