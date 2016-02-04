| Use Case                      | Download Book                    |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Curator, Moderator, Admin |
| Goal in Context               | Download or checkout a book that a user wants |
| Preconditions                 | The actor must be logged in and cannot be a publisher. There must be enough copies of the book to checkout or download.|
| Triggers                      | The actor clicks the checkout button on a book's page|
| Scenario                      | 1. Actor finds a book he would like to download<br> 2. Actor clicks the checkout button on the book page<br> 3. If the Actor is not a logged in user then he will be prompted to log in before the book is added to the account.|
| Exceptions                    | 1. All copies of the book are checked out: The user is given a choice to be put on a waitlist for the book.<br> 2. Actor not logged in: The actor is sent to a login screen before being sent to the appropriate page for checking out the book.|
| Priority                      | Essential, must be implemented. |
| When Available                | Second increment. |
| Frequency of Use              | Used on a daily basis (hopefully). |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Publisher, Server |
| Channels to Secondary  Actors | Server: network and local interface<br> Publisher: web browser|
| Open Issues                   | 1. How would we allow the transaction of downloading the book? <br> 2. Making sure there are no invalid download links <br>|
