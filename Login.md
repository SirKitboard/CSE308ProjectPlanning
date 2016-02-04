### Login

| Use case | Login |
|---|---|
| Primary Actor | Guest |
| Goal in context: | Authorize the user and give them the access their account level |
| Preconditions: | Must not be already logged in |
| Trigger: | A guest clicks on the login button |
| Scenario: | <ol><li>A guest opens the website and clicks on login</li><li>A guest attempts to checkout a book</li><li>A guest attempts to write a review</li></ol>|
| Exceptions: | <ol><li> When the guest enters no credentials </li><li> When the guest enters invalid credentials </li></ol> |
| Priority: | Essential, must be implemented |
| When available | First increment |
| Frequency of use | Multiple times a day |
| Channel to actor | Via web interface |
| Secondary actors | None |
| Channels to secondary actors | N/A |
| Open issues | <ol> <li>Where on the web interface will the search fields and buttons be displayed?</li><li>When use is redirected to login page, how to redirect him back to original page from where the originally started</li></ol> |
