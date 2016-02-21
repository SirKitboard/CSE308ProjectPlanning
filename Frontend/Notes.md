# Frontend Notes

## Template

* Search features
    * Filter By :
        * Genre - List genres, checkbox
        * Author - Text boxes
        * Year - 2 Text boxes
        * Publisher
        * Rating
    * Possible Intersection/Union button
* Login Modal for guests
* Name and account settings in top right for users
* Cart in top right
    * Cart slides in from right on click, makes rest of the page dark
    * Confirm checkout shows up in this sidebar when you click continue
    * Clicking on checkout takes you to checkout success confirmation

## Homepage

* Main banner only shows for guests
    * Replaced by recommendations for logged in users
* Curated only shows for logged in users
* If no follow curators then shows add curator banner

## Search result page

* Conditional Banner
    * Only shows up when we have a hard lock on what user wants
        + Filters by Author
        + Filters by Publisher
        + Filters by One genre
    * Only shows up when there are results
    * Contains :
        + Shows most popular books from result
        + Requested image by author / publisher
        + Generic Genre based banner containing popular
* 3 Div filter system
    * Genre Dropdown
        * Genres based on search results + Maturity
    * Author + Publisher
    * Rating + Year
    * Becomes 2 Dropdowns if screen is small
    * Becomes 1 dropdown if mobile
* Search Results :
    * Cards, number per row depends on screen size
    * Infinite Scroll + Load more button
        + Gets replaced by end of results if no more
    * Expanding details
    * Quick add on hover
    * Quick checkout icon in details


## Book details page

* Looks exactly like expanded details
* Contains a review tab
* Hover on stars to leave a rating
* Horizontal Scrolling reviews
    + First page contains stars graph and reviews
    + Following only has stars

## Early book return page

* Book suggestions similar to book returned

## Borrow history

* Use the amazon appearance:
    * Currently Checkout out
        * Early Return
        * Download
    * Past checkouts
        * Reborrow
        * Review
        * Purchase
    * Each item has borrowed on and due on/returned on
