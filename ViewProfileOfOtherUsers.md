| Use Case                      | View Profile Of Other Users         |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Admin, Moderator, Publisher|
| Goal in Context               | Display the user profile  of another user which has more information about the user such as birthday, gender, books favorited, cover picture etc  |
| Preconditions                 | User must be logged in and a member of site|
| Triggers                      | The actor is looking at a book and clicks view other users who've favorited this book  |
| Scenario                      | 1. Actor is on a books profile <br/> 2. Actor clicks on view more users who favorited this book <br/> 3. A list of users appears.</br>4.The user clicks on the picture or name of the user they want to look at. <br/> 5. User profile is displayed|
| Exceptions                    | User clicks on a user who no longer exists or was banned. In which case a box will appear informing the user that this person no longer exist|
| Priority                      | Fairly Important |
| When Available                | Second increment. |
| Frequency of Use              | Often, many times per day|
| Channel to Actor              | Via web browser |
| Secondary Actors              | |
| Channels to Secondary  Actors | Admin: web browser interface, program modification<br />server: network and local interface|
| Open Issues                   | List of users who favorited book is too long |