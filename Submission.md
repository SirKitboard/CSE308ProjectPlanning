# CSE308 - Deliverable #4

## Team name : ~(Decaf)

### User Roles

1. **Guest**: Guests can browse the website,read reviews however they cannot checkout or reserve books.
2. **User**: A user can check out(download) books and write reviews. They can view other users profiles and see what they have been reading. They can also read the reviews of other users.
3. **Moderator**: A moderator can delete reviews that are inappropriate and ban users who are writing spam or inappropriate reviews.
6. **Admin**: An Admin change every aspect of the website, therefore they have full backend access. They have all the access a Moderator has, remove users, create and remove moderators and publishers.


### Use Cases

#### Guest:
1. **Sign up-** A guest fills out their basic information to become a user of the site and gain access to all the books. Everyone signs up as a user, and can then be promoted to a different level. Admins and Moderators are directly added and they don't have to sign up by existing Admins.
1. **Login-** A guest fills out the user ID and password and gets logged in and authorized. Reroutes you to the page you were viewing.
1. **Basic Search-** The actor fills in keywords in the search bar and gets relevant results on a separate page.
1. **View book information-** Click on the profile of the book to see things like Title, Author, Description, Genre, Rating, Age Rating (YA, M etc).
1. **Browse books-** The actor can browse books by title, author, genre, year by selecting a choice from a menu.
1. **View recently added books-** View a list of books that were recently added; displayed on the home page. Returns the last few books added to the site up to the amount the screen can fit. There is a view all option to see every latest book added.
1. **Sort Reviews-** The actor can sort the reviews on a book by helpfulness, date and rating given at the review section of a book’s page.
1. **Reactivate Account-** If you attempt to login with an account that is deactivated, it will prompt you to reactivate it.

#### User:
1. **Logout -** The actor clicks on the logout button, and gets logged out of the website and becomes a guest. Reroutes you to the last authorized page.
1. **Update profile-** The actor can update details in his profile like picture, name, address, etc. Triggered by clicking edit profile which turns all fields into text boxes. You can press the update button at the end of the form to save changes.
1. **Reserve currently unavailable book-** If a book you want is not currently in stock or is checked out by another user, you can use this to reserve the book when it comes back in stock. User receives a notification when the book becomes available. Through a waitlist system, the book is locked out for 5 days or until the user confirms they want to check it out, whatever happens first.
1. **Return book early-** If you are finished with your book early there will be an option in your profile next to each book that you’ve checked out where you can return it before the due date. There will also be an option on that book profile page to return the book early.
1. **Purchase book-** Clicking the option to buy a book will lead you to an external link where you can purchase the book from a purchasing site. Found on the book’s profile page.
1. **Write a review-** After you return a book, you will be given the option to rate it ( out of 5 stars) and write a review about what you thought of it. You may chose to just rate it out of 5 stars, do both, or do neither. You may also go back at a later time and review any book that you have checked out from the book profile.
1. **Edit your review-** You can edit any reviews you’ve written by going to the reviews section of a book or by looking at a list of reviews you’ve written which appears on your profile.
1. **Delete your review-** Delete a review you have written for a book by going to the reviews section of a book or by looking at a list of reviews you’ve written which appears on your profile.
1. **Favorite a Book-** A user may add a book to their favorites which will appear on their personal profile. A button to favorite will be available on every book profile page.
1. **Unfavourite book-** If you no longer like the book, you may remove it from your favorites list. Can unfavorite a book from the same button as favorite book after you favorite it.
1. **View profile of other users -** You can search for a user’s profile by using the main search bar and clicking on the users button and see books they have read and reviewed as well as minor details that they wish to disclose like picture, name, age etc.
1. **Flag a book -** Next to every book there will be the option to flag it if you feel it is inappropriate.
1. **Rate a book -** Rate a book out of 5 stars. This is on the book profile’s page.
1. **Request Help -** If you have any questions there will always be a request help button on every page you visit that will take you to the contact us page where you can send an email to the moderators.
1. **Deactivate your account -** The actor can deactivate his or her account by clicking on the deactivate button on your profile which removes the account from the website but still retains the data in case it needs to be reactivated.
1. **Mark review as helpful or unhelpful -** The actor can mark a review as helpful or unhelpful which modifies the default order in which the reviews appear.
1. **Flag review -** Actors can flag an inappropriate review.. A flagged review can be sent to the moderators for removal or be autoremoved in case of too many flags.
1. **Add a book to your wish list-**  The user can add a book the their wish list. When the user adds a book to their wish list, they will receive a notification that the book is now available.
1. **View wishlist -** View books on your wishlist. Shows number of copies available, and size of wait list (if applicable).
1. **View cart -** View books that were added into the user’s cart. Can continue to checkout from here or edit their cart.
1. **Add to cart -** Adds a book to a user’s cart. Cart can hold multiple books.
1. **Remove from cart -** If a user decides they no longer want a book, they can remove it from the cart by going to the cart or by the book's profile page.
1. **Checkout -** This associates books in the cart with a user’s account. It also grants users the ability to download books that were checked out. Users can also do a quick checkout for a single book or checkout from cart. If a book in the cart is out of stock, checkout all available books and prompt to reserve the out of stock book(s).
1. **Set global search preferences -** In their account settings, users can set their global search preferences such as maturity, remove genres from results etc.
1. **View book recommendations -** Users can view book recommendations based on their purchases, searches, review histories.
1. **Mark book as “Not interested”  -** Books can be marked as “not interested” and then this book and others like it would be hidden from recommendations. Recommended books are on the home page.

<div class="page-break"></div>

#### Moderator:
1. **Delete inappropriate review -** Delete reviews that were flagged as inappropriate by users.
1. **Ban a user -** Removes a user’s ability to access downloading, checkout, writing reviews, and rating books.
1. **Unban a user -** Grant a banned user full access to the website.
1. **Ban a book -** Removes all users’ ability to access a book’s page, download, checkout, review, and rate a book.
1. **Unban a book -** Make the book available to users.
1. **Link books in a series -** Link books in a series to each other.
1. **Get their book statistics/reports -** Receive various statistics about the books such as the number of copies downloaded per week, the average ranking of the book compared to others, the average rating, etc.

#### Admin:
1. **Permanently ban a user -** Removes user and all information associated with them from database and site.
1. **Update the look of the website -** Change front end of the website, such as banners, bars, layout, etc.
1. **Add and remove rows from the database -** Add or remove information from the database such as a book, author, author name, etc.
1. **Update database structure -** Admins can modify the database structure and migrate the website onto the new structure.
1. **Upload Book -** Add a book to the website and database and creates a page for it based on information put on the add book form. Action available on book’s profile and on publisher’s list of books
1. **Unlist a Book -** Remove a book’s profile from the website. Action available on book’s profile and on publisher’s list of books
1. **Update Their Book(s) Profile -** Change certain details on a book’s page such as description, title, author, etc. Action available on book’s profile.
1. **Update Inventory -** Add or subtract number of copies of book available for download on the book’s profile page.
1. **Re-upload a new copy of a book -** Upload a new copy in the case of a typo or small change in the current edition of the book
1. **Create publishing organization -** Create a page for a publisher, which shows their profile all their books.


### Use Case Details

#### Add A Book

| Use case | Adding a book |
|---|---|
| Primary Actor | Admin |
| Goal in context: | Add a book that can be checked out by other users |
| Preconditions: | Must be logged in as an Admin |
| Trigger: | The actor clicks on the "Add book" button |
| Scenario: | <ol><li>The Actor opens the website and clicks on add a book button</li></ol>|
| Exceptions: | <ol><li> The book already exists </li><li> There is no stock for the book </li><li>The upload for book cover or other information fails</li></ol> |
| Priority: | Essential, must be implemented |
| When available | First increment |
| Frequency of use | Up to the actors |
| Channel to actor | Via web interface |
| Secondary actors | Admin |
| Channels to secondary actors | Web interface or backend |
| Open issues | <ol> <li>How to deal with books that already exist</li></ol> |

#### Book Search


| Use-case                     | BookSearch                                   |
|------------------------------|--------------------------------------------------|
| Primary actor                | User, Admin, Moderator, Guest|
| Goal in context              | Display a list of books that match the search term and criteria |
| Preconditions                | None |
| Trigger                      | The enter button has been pressed when selected or the "Search" button have been pressed. |
| Scenario                     | 1. Actor observes search bar.<br /> 2. Actor selects the search text box. <br />3. Actor enters name of book, author, genre, or publisher. <br /> 4. Actor clicks search button or presses enter when search text box is selected. <br /> 5. Actor observes all records in the database that correspond to the given search terms and criteria. |
| Exceptions                   | <ol><li>There are no records that match the given criteria and search terms. The message "No results were found" will be displayed and the actor is able to provide different search terms.</li><li>The search query contains illegal characters</li></ol> |
| Priority                     | Essential, must be implemented. |
| When available               | First increment |
| Frequency of use             | Many times per day. |
| Channel to actor             | Via web browser interface. |
| Secondary actors             | Admin, server |
| Channels to secondary actors | Admin: web browser interface, program modification<br />server: network and local interface |
| Open issues                  | 1. Where on the web browser will the search box and buttons be displayed?<br /> |

#### Deactivate Account

| Use Case                      | Deactivate Account                   |
|-------------------------------|---------------------------------|
| Primary Actor                 | User, Moderator, Admin |
| Goal in Context               | User can deactivate account if he/she wishes to no longer be a part of the site. |
| Preconditions                 | The actor must be logged in and be a currently active user. Actor must navigate to the account settings page.|
| Triggers                      | The actor goes to his account settings and chooses an option to deactivate his account.|
| Scenario                      | 1. Actor navigates to the account settings page. <br>2. Actor clicks the deactivate account button. <br> 3. Popup comes asking the user to confirm the choice. Password input is required to validate current user. <br> 4. If user wishes to continue he/she clicks the confirm button <br> 5. Actor is logged out of account and taken to the home page.|
| Exceptions                    | <ol><li>User inputs incorrect password in confirmation popup.|
| Priority                      | Important, but not necessarily implemented immediately |
| When Available                | Second increment. |
| Frequency of Use              | Occasionally |
| Channel to Actor              | Via web browser |
| Secondary Actors              | Server |
| Channels to Secondary  Actors | Server: network and local interface<br> |
| Open Issues                   | Account has checked out books|

<div class="page-break"></div>

#### Login

| Use case | Login |
|---|---|
| Primary Actor | Guest |
| Goal in context: | Authorize the actor and give them the access their account level |
| Preconditions: | Must not be already logged in |
| Trigger: | The actor clicks on the login button |
| Scenario: | <ol><li>The Actor opens the website and clicks on login</li><li>A actor attempts to checkout a book</li><li>A actor attempts to write a review</li></ol>|
| Exceptions: | <ol><li> When the actor enters no credentials </li><li> When the actor enters invalid credentials </li></ol> |
| Priority: | Essential, must be implemented |
| When available | First increment |
| Frequency of use | Multiple times a day |
| Channel to actor | Via web interface |
| Secondary actors | None |
| Channels to secondary actors | N/A |
| Open issues | <ol> <li>Where on the web interface will the search fields and buttons be displayed?</li><li>When actor is redirected to login page, how to redirect him back to original page from where the originally started</li></ol> |

<div class="page-break"></div>

#### Write a review

|  Use-case:  |WritingReview |
|---|---|
| Primary actor:   | User |
| Goal in context:   | Write a review for a book that they checked out |
| Preconditions:  | The actor has been authenticated and identified as a user |
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
