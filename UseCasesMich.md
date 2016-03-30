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


### Ban User

| Use case | Ban User |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Making a user account unable to login or use other site features. |
| Preconditions: | Must be an existing account. |
| Trigger: | The actor clicks the "Ban" button on a user's profile page. |
| Scenario: | <ol><li>The actor clicks the "Ban" button on a user's profile page.</li><li>A modal pops up asking for confirmation.</li><li>Actor presses "Yes" button</li><li>A notification pops up saying the user has been successfully banned.</li></ol>|
| Exceptions: | <ol><li> The user is already banned.</li></ol> |
| Priority: | Not very important. |
| When available | Second increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol> <li>If banned account profiles should still be visible.</li></ol> |


### Unban User

| Use case | Unban User |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Making a user account unable to login or use other site features. |
| Preconditions: | Must be an existing, banned account. |
| Trigger: | The actor clicks the "Unban" button on a user's profile page. |
| Scenario: | <ol><li>The actor clicks the "Unban" button on a user's profile page.</li><li>A confirmation modal pops up.</li><li>The actor hits the "Yes" button.</li><li>A notification pops up saying the user has been successfully unbanned.</li></ol>|
| Exceptions: | <ol><li> The user isn't banned.</li><li>The user is permanently banned.</li></ol> |
| Priority: | Not very important. |
| When available | Second increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol></ol> |


### Ban Book

| Use case | Ban Book |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Making a book unavailable for users. |
| Preconditions: | Must be an existing book. |
| Trigger: | The actor clicks the "Ban" button on a book's detail page. |
| Scenario: | <ol><li>The actor clicks the "Ban" button on a book's detail page.</li><li>A confirmation modal pops up.</li><li>The actor hits the "Yes" button.</li><li>A notification pops up saying the book has been successfully banned.</li></ol>|
| Exceptions: | <ol><li> The book exists in the database.</li></ol> |
| Priority: | Not very important. |
| When available | Second increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol></ol> |


### Unban Book

| Use case | Unban Book |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Making a banned book available for users. |
| Preconditions: | Must be an existing, banned book. |
| Trigger: | The actor clicks the "Unban" button on a book's detail page. |
| Scenario: | <ol><li>The actor clicks the "Unban" button on a book's detail page.</li><li>A confirmation modal pops up.</li><li>The actor hits the "Yes" button.</li><li>A notification pops up saying the book has been successfully unbanned.</li></ol>|
| Exceptions: | <ol><li> The book isn't banned.</li></ol> |
| Priority: | Not very important. |
| When available | Second increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol></ol> |


### Update Inventory

| Use case | Update Inventory |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Editing the number of copies of a certain book available for download. |
| Preconditions: | Must be an existing book. |
| Trigger: | The actor clicks the "Edit" button on a book's detail page. |
| Scenario: | <ol><li>The actor clicks the "Edit" button on a book's detail page.</li><li>A modal to edit book details opens.</li><li>The actor enters new value for the number of licenses.</li><li>The actor hits the "Save" button</li><li>A notification pops up saying the book has been successfully updated.</li></ol>|
| Exceptions: | <ol><li> The number specified is negative or too large.</li></ol> |
| Priority: | Important, must be implemented|
| When available | First increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol></ol> |


### Update Book's Profile

| Use case | Update Book's Profile |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Editing the information on a book and displaying it on it's detail page. |
| Preconditions: | Must be an existing book. |
| Trigger: | The actor clicks the "Edit" button on a book's detail page. |
| Scenario: | <ol><li>The actor clicks the "Edit" button on a book's detail page.</li><li>A modal to edit book details opens.</li><li>The actor enters new values for fields they want to change.</li><li>The actor hits the "Save" button</li><li>A notification pops up saying the book has been successfully updated.</li></ol>|
| Exceptions: | <ol><li> Required fields are left empty.</li><li>Information in fields aren't valid.</li></ol> |
| Priority: | Important, must be implemented|
| When available | First increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol></ol> |


### Mark Review as Helpful/Unhelpful

| Use case | Mark Review as Helpful/Unhelpful |
|---|---|
| Primary Actor | User |
| Goal in context: | Mark a book review as helpful or unhelpful. |
| Preconditions: | Must be an existing review. Must be logged in. |
| Trigger: | The actor clicks the "helpful" or "unhelpful" button in a review.|
| Scenario: | <ol><li>The actor clicks the "helpful" or "unhelpful" button in a review.</li><li>Page updates with the new values for number of helpful and unhelpful votes.</li></ol>|
| Exceptions: | <ol><li> The user isn't logged in.</li></ol> |
| Priority: | Not important|
| When available | Second increment |
| Frequency of use | Once per review |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol>Should a user be able to undo their choice.</ol> |


### Create Publishing Organization

| Use case | Create Publishing Organization |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Create a new publishing organization that will contain information on books published by this company. |
| Preconditions: | Must be an admin. Must input valid information. |
| Trigger: | The actor clicks the "Create publishing organization" button on the admin dashboard.|
| Scenario: | <ol><li>The actor clicks the "Create publishing organization" button on the admin dashboard.</li><li>A modal pops up with a form.</li><li>The actor inputs information about the organization in the specified fields.</li><li>The actor presses "Create"</li><li>The new organization is created and a page is shown for the new publishing organization</li></ol>|
| Exceptions: | <ol><li> The user isn't an admin.</li><li>Invalid values were inputted</li></ol> |
| Priority: | Important, must be implemented|
| When available | First increment |
| Frequency of use | Up to the actor|
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues |  |


### Link Books in a Series

| Use case | Link Books in a Series |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Creating a relationship between books that are in a series. |
| Preconditions: | Must have existing books. |
| Trigger: | The actor clicks the "Add book series" button on admin book page. |
| Scenario: | <ol><li>The actor clicks the "Add book series" button on admin book page.</li><li>A modal to name series and add books is displayed.</li><li>The actor enters value for name and adds existing books to the series.</li><li>The actor hits the "Save" button</li><li>A notification pops up saying the book series has been successfully updated.</li></ol>|
| Exceptions: | <ol><li> Required fields are left empty.</li><li>Information in fields aren't valid.</li></ol> |
| Priority: | Not important|
| When available | Second increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol></ol> |


### Re-upload a New Copy Of a Book

| Use case | Re-upload a New Copy of a Book |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Replacing the current copy of a certain book with another copy.|
| Preconditions: | Must be an existing book. |
| Trigger: | The actor clicks the "Edit" button on a book's detail page. |
| Scenario: | <ol><li>The actor clicks the "Edit" button on a book's detail page.</li><li>A confirmation modal pops up.</li><li>The actor uploads a new copy of a book.</li><li>The actor hits "Save" button</li><li>A notification pops up saying the book has been successfully edited.</li></ol>|
| Exceptions: | <ol><li> The book doesn't exist.</li><li>Invalid file or wrong file type is uploaded</li></ol> |
| Priority: | Important, must be implemented. |
| When available | First increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary Actors | server|
| Channels to Secondary| server: network and local interface|
| Open issues | <ol></ol> |
