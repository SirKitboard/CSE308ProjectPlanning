
| Use-case                     | BookSearch                                   |
|------------------------------|--------------------------------------------------|
| Primary actor                | User, Admin, Moderator, Publisher, Guest, Curator |
| Goal in context              | Display a list of books that match the search term and criteria |
| Preconditions                | None |
| Trigger                      | The enter button has been pressed when selected or the "Search" button have been pressed. |
| Scenario                     | 1. Actor observes search bar.<br /> 2. Actor selects the search text box. <br />3. Actor enters name of book, author, genre, or publisher. <br /> 4. Actor clicks search button or presses enter when search text box is selected. <br /> 5. Actor observes all records in the database that correspond to the given search terms and criteria. |
| Exceptions                   | 1. There are no records that match the given criteria and search terms. The message "No results were found" will be displayed and the actor is able to provide different search terms. |
| Priority                     | Essential, must be implemented. |
| When available               | First increment |
| Frequency of use             | Many times per day. |
| Channel to actor             | Via web browser interface. |
| Secondary actors             | Admin, server |
| Channels to secondary actors | Admin: web browser interface, program modification<br />server: network and local interface |
| Open issues                  | 1. Where on the web browser will the search box and buttons be displayed?<br /> |
