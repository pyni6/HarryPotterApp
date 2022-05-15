import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function CharsDetails(props) {
  // ComponentDidMount is used to
  // execute the code

  const characters = useLocation();
  const item = characters.state;

  return (
    <div id="HPCharacterDetail" className="HPCharactersDetail">
      <div id="detailsList"></div>
      <div>
        <div>
          <Link to="/CharsTable">Return to Character List</Link>
        </div>
        <div>
          <h1>Character Details</h1>
        </div>
        <div>
          <div>
            <h2>{item.name}</h2>
          </div>
          {item.alternate_name ? (
            <div>
              <b>Alternate Character Name</b>
              <p>{item.alternate_name.join(',')}</p>
            </div>
          ) : undefined}
          {item.image ? (
            <div>
              <img src={item.image} alt="charPicture" className="photo" />
            </div>
          ) : undefined}
          {item.species ? (
            <div>
              <p>
                <b>Character Species: </b>
                {item.species}
              </p>
            </div>
          ) : undefined}

          {item.gender ? (
            <div>
              <p>
                <b>Character Gender: </b>
                {item.gender}
              </p>
            </div>
          ) : undefined}
          {item.house ? (
            <div>
              <p>
                <b>Character House: </b>
                {item.house}
              </p>
            </div>
          ) : undefined}
          {item.dateOfBirth ? (
            <div>
              <p>
                <b>Character Birth Date: </b>
                {item.dateOfBirth}
              </p>
            </div>
          ) : undefined}
          {item.yearOfBirth ? (
            <div>
              <p>
                <b>Character Birth Year: </b>
                {item.yearOfBirth}
              </p>
            </div>
          ) : undefined}
          {item.wizard ? (
            <div>
              <b>Character is a Wizard</b>
            </div>
          ) : undefined}

          {item.ancestry ? (
            <div>
              <p>
                <b>Character Ancestry: </b>
                {item.ancestry}
              </p>
            </div>
          ) : undefined}
          {item.eyeColour ? (
            <div>
              <p>
                <b>Character Eye Colour: </b>
                {item.eyeColour}
              </p>
            </div>
          ) : undefined}
          {item.hairColour ? (
            <div>
              <p>
                <b>Character Hair Colour: </b>
                {item.hairColour}
              </p>
            </div>
          ) : undefined}
          {item.wand.wood && item.wand.core && item.wand.length ? (
            <div>
              <b>Wand</b>
              <p>
                <b>Wood: </b>
                {item.wand.wood},<b> Core: </b>
                {item.wand.core},<b> Length: </b>
                {item.wand.length}
              </p>
            </div>
          ) : undefined}
          {item.patronus ? (
            <div>
              <p>
                <b>Character Patronus: </b>
                {item.patronus}
              </p>
            </div>
          ) : undefined}
          {item.hogwartsStudent ? (
            <div>
              <b>Character is or was a Student at Hogwarts</b>
            </div>
          ) : undefined}
          {item.hogwartsStaff ? (
            <div>
              <b>Character is or was part of Hogwarts Staff</b>
            </div>
          ) : undefined}
          {item.actor ? (
            <div>
              <p>
                <b>Character Actor: </b>
                {item.actor}
              </p>
            </div>
          ) : undefined}
          {item.alternate_actors.length ? (
            <div>
              <b>Alternate Character Actors</b>
              <p>{item.alternate_actors.join(',')}</p>
            </div>
          ) : undefined}
          {item.alive ? (
            <div>
              <b>Character is Alive</b>
            </div>
          ) : (
            <div>
              <b>Character is Dead</b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharsDetails;
