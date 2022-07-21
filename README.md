# About the project

After checking the Django documentation, I started with creating the backend, then migrating the model and setting up the urls.

I changed some code in the SpendingList component, and App.js is now responsible for fetching the spendings.
Next, to create a new spending, I collected the data from Form.js and pass it up to App.js to post a new spending.

Filtering and sorting the spending in managed in App.js with a default sorting and taking into consideration when sorting by amount.


# Instractions to start the program

###  Clone the gitHub repository
-$ git clone git@github.com:BenAyedMehdi/spending-exercise.git

### Run Django bakend
-$ cd spendingExercice 
-$ python manage.py runserver

### Install client dependencies:
-$ cd spendingExercise\spending-exercise\web
-$ npm install

### Run the client (http://localhost:3000):
-$ cd spendingExercise\spending-exercise\web
-$ npm start
