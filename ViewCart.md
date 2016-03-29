| Use Case                      | View Cart          |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Admin, Moderator|
| Goal in Context               | Display the list of books the User is about to check out|
| Preconditions                 |User must be logged in |
| Triggers                      | The actor clicks on "view cart" on their profile|
| Scenario                      | 1. Actor is at any point in the site (the view cart is pinned to the side of every page) <br/> 2. Actor clicks "View Cart" <br/> 3. A list of books they are about to check out appear in a modal</br>4. Clicks ok to close modal|
| Exceptions                    | Cart contains books no longer on the site|
| Priority                      | Moderately Important |
| When Available                | Second increment. |
| Frequency of Use              | Often, many times per day|
| Channel to Actor              | Via web browser |
| Secondary Actors              | Admin, server|
| Channels to Secondary  Actors | Admin: web browser interface, program modification<br />server: network and local interface|
| Open Issues                   | User repeatedly clicks on veiw cart while the request is being processed. |