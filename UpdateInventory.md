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
