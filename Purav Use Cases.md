| Use Case                      | Unfavorite A Book               |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | User can unfavorite a book to remove it from their favorites list. |
| Preconditions                 | The actor must be logged in and be a currently active user. Actor must navigate to the book profiles. Book must already be favorited.|
| Triggers                      | The actor clicks the filled in heart icon. |
| Scenario                      | 1. Actor goes to the book profile. <br/> 2. Actor clicks on the heart icon. <br/> 3. Heart icon color changes from filled in to empty on success.|
| Exceptions                    | |
| Priority                      | Important, but not necessarily implemented immediately |
| When Available                | Second increment. |
| Frequency of Use              | Occasionally |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser |
| Open Issues                   | User clicks the heart icon again while the request is being processed. |


| Use Case                      | Add Book To Wishlist            |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | User can add a book to their wishlist in order to receive notifications about it. |
| Preconditions                 | The actor must be logged in and be a currently active user. Actor must navigate to the book profile. Book should not already be on the wishlist.|
| Triggers                      | The actor clicks the "Add to wishlist" button |
| Scenario                      | 1. Actor goes to the book profile. <br/> 2. Actor clicks on "Add to wishlist" button. <br/> 3. User sees spinning circle while book is being added to wishlist. <br/> 4. Button changes to "Remove from wishlist."|
| Exceptions                    | |
| Priority                      | Low priority |
| When Available                | Second increment. |
| Frequency of Use              | Frequently |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser |
| Open Issues                   | |

| Use Case                      | Ractivate Account               |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | User can reactivate their account if it has been deactivate. |
| Preconditions                 | The actor must have an existing account that is deactivated.|
| Triggers                      | The actor tries to log into a deactivated account. |
| Scenario                      | 1. Actor attempts to log into website. <br/> 2. Upon successful login, actor is sent to a reactivate account page. <br/> 3. Actor clicks confirm button. <br/> 4. Actor is sent to the homepage."|
| Exceptions                    | |
| Priority                      | Kind of Important, not necessarily implemented immediately |
| When Available                | Second increment. |
| Frequency of Use              | Occasionally |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser |
| Open Issues                   | User can try to reactivate account that was banned and not deactivated. |

| Use Case                      | Return book early           |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | User can return a book before the due date if they are done with it. |
| Preconditions                 | Book must be checked out by the Actor.|
| Triggers                      | Actor clicks "Return Book" button in book profile. |
| Scenario                      | 1. Actor navigates to book profile. 2. Actor clicks "Return Book" button. <br/> 3. Actor is asked to conirm the return. <br/> 4. Actor clicks confirm if he/she wished to continue. <br/> 5. Book is returned and Actor remains on the book profile."|
| Exceptions                    | |
| Priority                      | Important, one of the main features of the site. |
| When Available                | Second increment. |
| Frequency of Use              | Occasionally |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser |
| Open Issues                   | Making sure that access to the book is removed when the book is returned. |

| Use Case                      | Reserve Currently Unavailable Book               |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | Actor can reserve a book if all available copies are checked out. |
| Preconditions                 | The actor must be logged in and be a currently active user. There must be no available copies of the book. Actor should not already be on the waitlist.|
| Triggers                      | Actor clicks "Reserve Copy" button. |
| Scenario                      | 1. Actor navigates to the book profile. <br/> 2. Actor clicks the "Reserve Copy" button <br/> 3. Actor Is added to the waitlist and the book profile indicates the change.|
| Exceptions                    | |
| Priority                      | Important, one of the main features of the site. |
| When Available                | First increment. |
| Frequency of Use              | Occasionally |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser |
| Open Issues                   | |

| Use Case                      | Flag A Book             |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | Actor can flag a book if it is offensive or inappropriate. |
| Preconditions                 | The actor must be logged in and be a currently active user. |
| Triggers                      | The actor clicks the flag icon in the book profile. |
| Scenario                      | 1. Actor navigates to the book profile. <br/> 2.Actor clicks the flag icon. <br/> 3. Flag icon is filled in to indicate the book has been flagged.|
| Exceptions                    | |
| Priority                      | Important, but not necessarily implemented immediately |
| When Available                | First increment. |
| Frequency of Use              | Occasionally |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser |
| Open Issues                   | Making sure users do not abuse the flag system. <br/>How would we handle a book with a lot of flags.|

| Use Case                      | Rate A Book                     |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | Actor can leave a rating for a book on a scale of 1 to 5. |
| Preconditions                 | The actor must be logged in and be a currently active user. Actor must have checked out the book in the past or must currently own it. |
| Triggers                      | The actor clicks the "Write A Review" Button` |
| Scenario                      | 1. Actor navigates to the book profile. <br/> 2. Actor clicks the review tab <br/> 3. Actor clicks write a review button <br/> 4. Actor clicks on the star corresponding to the rating. <br/> Actor clicks submit.
| Exceptions                    | |
| Priority                      | Important, but not necessarily implemented immediately |
| When Available                | First increment. |
| Frequency of Use              | Frequently |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser|
| Open Issues                   | |

| Use Case                      | Remove From Cart               |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | Actor can remove a book from their cart if they don't want it. |
| Preconditions                 | The actor must be logged in and be a currently active user. Item must exist in the cart.|
| Triggers                      | The actor clicks the X next to the cart item. |
| Scenario                      | 1. Actor clicks the cart icon on any page <br/> 2. Actor clicks the X icon next to the cart item <br/> 3. Item is removed from the cart |
| Exceptions                    | |
| Priority                      | Important, needed for checkout out books. |
| When Available                | First increment. |
| Frequency of Use              | Frequently |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser |
| Open Issues                   | |

| Use Case                      | Add To Cart              |
|-------------------------------|---------------------------------|
| Primary Actor                 | User |
| Goal in Context               | Actor can add an item to the cart before checking it out. |
| Preconditions                 | The actor must be logged in and be a currently active user. |
| Triggers                      | The actor clicks "Add to cart" button on book profile. |
| Scenario                      | 1. Actor navigates to the book profile <br/> 2. Actor clicks "Add to cart" button <br/> 3. Item is added to the user's cart|
| Exceptions                    | |
| Priority                      | Important, needed for checkout out books. |
| When Available                | First increment. |
| Frequency of Use              | Frequently |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Moderator, Admin |
| Channels to Secondary  Actors | Web browser |
| Open Issues                   | A book could run out of available copies before a user can checkout everything in the cart.|
