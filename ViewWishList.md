| Use Case                      | View Wish List          |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Admin, Moderator|
| Goal in Context               | Display the List of Books a User would like to check out|
| Preconditions                 |User must be logged in |
| Triggers                      | The actor clicks on "view wishlist" on their profile|
| Scenario                      | 1. Actor is on their profile. <br/> 2. Actor clicks "View Wishlist" <br/> 3. A list of books they have added to their wish list appears in a modal</br>4. Clicks ok to close modal|
| Exceptions                    | Wish list contains books no longer on the site|
| Priority                      | Moderately Important |
| When Available                | Second increment. |
| Frequency of Use              | Often, many times per day|
| Channel to Actor              | Via web browser |
| Secondary Actors              | |
| Channels to Secondary  Actors | Admin: web browser interface, program modification<br />server: network and local interface||
| Open Issues                   | User repeatedly clicks on veiew list while the request is being processed. |