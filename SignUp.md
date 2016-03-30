### Sign Up

| Use case | Sign Up |
|---|---|
| Primary Actor | Guest |
| Goal in context: | Creating an account that a guest can use to interact with the site |
| Preconditions: | Must not already be logged in. |
| Trigger: | The actor clicks the "Sign up" tab in the login modal from the "Login" button. |
| Scenario: | <ol><li>The actor clicks the "Login" button on the navbar.</li><li>The actor fills in information requested.</li><li>The actor presses the "Sign Up" button after completing the form.</li></ol>|
| Exceptions: | <ol><li> The email provided already exists in the database</li><li> The provided password doesn't match the verify password. </li><li>Information wasn't provided for certain field(s)</li></ol> |
| Priority: | Essential, must be implemented |
| When available | First increment |
| Frequency of use | Up `to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | Admin, server|
| Channels to Secondary  Actors | Admin: web browser interface, program modification<br />server: network and local interface|
| Open issues | <ol> <li>How to verify and store passwords.</li></ol> |
