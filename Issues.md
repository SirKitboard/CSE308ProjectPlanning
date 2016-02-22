# Preliminary Issues Document

Some risks that we foresee for our project include:

1. The ability to efficiently query a large number of books for the user’s searches. As the number of books increases, we must account for large advanced search queries a user can put in to search for book.
1. Maintaining the integrity of the database throughout multiple transactions can become difficult as the amount of users increases. In addition, these large numbers of people on the site will be using different features at once.
1. Returning downloaded books when the time limit is up or when a customer chooses early return. We must find a way to ensure that it is no longer on the user’s computer once it is returned.
1. Setting up multi-server communication for all the features. For example, if the user wishes to purchase a book we must be able to communicate the user authentication with purchasing server as well as any other necessary information to facilitate the transaction.
1. We must be able to screen out publishers and the books they upload in order to make sure that the quality of our website is maintained. At a large number of book uploads, manual screening can become slow and inefficient.
1. Making sure that any changes to the site or database by the admins do not break the website. This would require some sort of deployment management system to sandbox the code and make sure it is properly functioning.
