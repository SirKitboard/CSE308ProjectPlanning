###Writing a review
|  Use-case:  |WritingReview |
|---|---|
| Primary actor:   | User, Curator |
| Goal in context:   | Write a review for a book that they checked out |
| Preconditions:  | The actor has been authenticated and identified as a user or curator|
| Trigger: | The actor clicks on the “Write a review” button. |
| Scenario:  | <ol> <li> Actor goes to a book's page         <ol>            <li>Actor selects the "Write a Review" Button</li><li>Actor writes the review.</li><li>Actor hits enter to submit review for approval</li> </ol></li><li>Actor has just returned a book<ol><li>Actor is prompted "Would you like to submit a review"</li><li>If actor selects yes, they write a review and hit enter.</li><li>If actor selects no, they continue on to whatever action they wish to perform.</li></ol></li><li>Actor is on their own page<ol><li>Actor is on their own profile</li><li>Actors sees the option to review previously checked out books</li><li>Actor selects "Write a Review"</li><li>A list of books previously checked out by the user appears</li><li>They select which book they want to review </li><li>Write the review and press enter to await approval.</li></ol></li></ol>   |
| Exceptions: | An actor is not logged in  |
| Priority:   | Essential, must be implemented|
| When available:   | First Increment  |
| Frequency of use:  | As often as the user is checking out books. The more books they checks out, the more often they will write reviews |
| Channel to actor:  | via web browser interface  |
| Secondary actors:  | Admin,Moderator  |
| Channels to secondary actors  | via web browser interface  |
| Open issues:  | 1. Handling reviews that have profanity <br/> 2. Writing a review for a book the actor checked and has been read before but is no longer in the system<br/>  3.Where on the web page will the "Write a Review" Button be displayed  |



