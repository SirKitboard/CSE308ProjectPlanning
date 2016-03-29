
| Use-case                     | Delete Your Review                        |
|------------------------------|--------------------------------------------------|
| Primary actor                | User |
| Goal in context              | Delete a review previously made by the user|
| Preconditions                | Must be logged in and member of site |
| Trigger                      | The "Edit Your Reviews" button is pressed on the User's profile |
| Scenario                     | 1. Actor is on their own profile.<br /> 2. Actor clicks "Edit Your Reviews."" <br />3. A list of reviews made by the Actor are displayed in a modal. <br /> 4. The Actor selects which review they want to delete by clicking the "Delete" button next to the desired review. <br /> 5. A confimation box appears asking if the user is sure they want to delete <br/> 6.The Actor clicks confirm |
| Exceptions                   |  |
| Priority                     | Essential, must be implemented. |
| When available               | First increment |
| Frequency of use             | Frequent, several times a day |
| Channel to actor             | Via web browser interface. |
| Secondary actors             | Admin, server |
| Channels to secondary actors | Admin: web browser interface, program modification<br />server: network and local interface |
| Open issues                  |user has no reviews|
