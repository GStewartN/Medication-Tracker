import React from "react";

function About(props) {
  return (
    <div>
      <h3>About Medication Tracker</h3>
      <p>This app is designed to be a very simple way for a user to track the medications they are currently taking. Right now it is a work in progress. Currently, a user can enter a medicine with a description and doctors orders. The user can also delete a medicine when they are no longer taking it. The user can also start a timer for each medicine with a button click, and time elapsed since last taken appears in that particular medicine field. The user can also reset the timer for a particular medicine with a button click.</p>
      <h3>Wish List for Future Versions</h3>
      <ul>
        <li>Database user authentication so users can have their own instance of the database.</li>
        <li>Medicine search that allows the user to find and insert images of the medicine into the medicine field.</li>
        <li>A form fiels to enter side effects for each medicine.</li>
        <li>Add the ability to connect with a pharmacy an order refills with a button click.</li>
      </ul>
    </div>
  );
}

export default About;
