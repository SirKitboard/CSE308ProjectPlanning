# CSE308 - Deliverable #4

## Team name : ~(Decaf)

### Initial Issues Document

Some risks that we foresee for our project include:

| # | Risk | Description  | Assessment | Priority |
|---|---|---|---|---|
| 1 | Make user searches efficient | The ability to efficiently query a large number of books for the user’s searches. As the number of books increases, we must account for large advanced search queries a user can put in to search for book. | To make the searches fast, we need to make our query efficient and reduce the number of joins needed. To do so, we will only query the books table and not perform any joins.  |  Low  |
| 2 | Maintain database integrity | Maintaining the integrity of the database throughout multiple transactions can become difficult as the amount of users increases. | To maintain integrity of the database, we will need to make sure it is properly normalized and there is no redundant information | High |
| 3 | Ensuring a complete return | Returning downloaded books when the time limit is up or when a customer chooses early return. We must find a way to ensure that it is no longer on the user’s computer once it is returned. | To ensure complete return, the user will never be able to actually download the book but will instead use the proprietary client to read the book. The client will no longer have access to the book after the return date. | Moderate until second build, high after that |
| 4 | Multi-server communication | Setting up multi-server communication for all the features. For example, if the user wishes to purchase a book we must be able to communicate the user authentication with the purchasing server as well as any other necessary information to facilitate the transaction. | Define our own protocol so the servers know what data to expect and what data to receive to eliminate any ambiguity.  | Moderate until second build, high after that |
| 5 | Maintaining quality of site | Making sure that any changes to the site or database by the admins do not break the website. | This would require some sort of deployment management system to sandbox the code and make sure it is properly functioning | High |
| 6 | Preventing race condition  | We must prevent race conditions between large numbers of people using different features of the website at once. | We will use a first come first serve bases. Whoever sends a request to the server first will receive a successful response and the person who sent it later will receive an error message. | Moderate |
