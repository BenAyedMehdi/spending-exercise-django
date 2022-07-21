# About the project

After checking the Django documentation, I started with creating the backend, then migrating the model and setting up the urls.

I changed some code in the SpendingList component, and App.js is now responsible for fetching the spendings.
Next, to create a new spending, I collected the data from Form.js and pass it up to App.js to post a new spending.

Filtering and sorting the spendings list in managed in App.js with a default sorting and taking the currency into consideration when sorting by amount.


# Instractions to start the program

###  Clone the gitHub repository
- __$ git clone git@github.com:BenAyedMehdi/spending-exercise.git__

### Run Django bakend
- __$ cd spendingExercice__
- __$ python manage.py runserver__

### Install client dependencies:
- __$ cd spendingExercise\spending-exercise\web__
- __$ npm install__

### Run the client (http://localhost:3000):
- __$ cd spendingExercise\spending-exercise\web__
- __$ npm start__
