# [Note Taker](https://peaceful-fortress-86475.herokuapp.com/)
## [GitHub](https://github.com/dylandewey/employeesummary.git)
This application is an easy way to make notes.  Notes can be created, accessed later by title (uses an id) or deleted by title (also uses an id).  I was able to get the application to run but it wouldn't add or delete notes after pressing the corresponding button without refreshing the page.  After meeting with my tutor and working through the issues I was able to get the app to function properly.  I had nested routes and I wasn't making it asynchronous.  I had to make another js file that was more OOP.  The new js file also uses promisify.  
#### Note Taker Demo:
<img alt="Demo" src="notetakerdemo.gif" width="500">

