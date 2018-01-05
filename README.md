# Bookrganizer
A PERSONAL CATALOG APPLICATION
INTRODUCTION
Bookrganizer is a personal catalog application for books, movies, and games. The user can add movies, books and/or games to their catalog. They also can view their items on their dashboard and view the item’s details. Items can be deleted from the catalog. Users can send messages to other users and view each message sent and received. Also, users can edit their profile and change their password.
PROJECT SPECIFICATIONS
The focus of the project is creating a catalog app where users can view and edit their catalog and communicate with other users. Bookrganizer is a record keeping application. The application collects three distinct types of data: numerical (rating, year, ISBN, etc.), textual (title, messages, genre, etc.), and images. The application prototype can be found at: https://pr.to/HY2RRB/. The colors, fonts, and style of the application is different from the prototype but the structure of the pages and application is almost the same.
Next are the software specifications of the application like what programming languages was used, development environment, tools, extensions, etc.
Programming Languages, Libraries and Frameworks
I used HTML5, JavaScript, JQuery, and AngularJS for the front-end of the application. The front-end structure and platform was created using the Angular Template Hot Towel by John Papa. For the back-end I used NodeJS, and Express structure of the back-end was based on Visual Studio NodeJS with Express Project Solution. MongoDB was the database and I use Mongoose as my object modeling tool between MongoDB and my back-end.
IDE
I chose Visual Studio 2017 as my IDE since I am very familiar with it and I have used before for other applications. 
Tools
I used the NodeJS Console for visual studio to install packages using the npm; the Package Manager Console of VS2017 to install the Hot Towel Template. I also used VS2017 to create and automatically update the json file. I used MongoDB Compass to access the database to view and add tables and documents.
APPLICATION INFORMATION
This section is about the features of the application, instructions of how to use it, and access information to the application and database.
Features
Next is a list of the application features (what can a user do?):
•	Create an account using.
•	Login to the application.
•	View their catalog in their dashboard.
•	Add a movie, book, or game to their catalog.
•	Attach image to the book, game, or movie.
•	Delete a movie, book, or game from their catalog.
•	Send messages to another user of the application or themselves.
•	View the help page if they run into any issue.
•	View and edit their profile.
•	Change their password by providing the old and new password.
•	View movie, book, or game details by clicking on the title.
•	Logout from application.
Access information
This is the information needed to access the application and database:
AWS URL: http://52.89.68.203:1337/#/ (where the application is hosted).
Connect to MongoDB using Compass:    Hostname: 52.89.68.203, Port: 27017, Username: Prof_Shankar, Password: abc123, Authentication Database: admin.
Sign in account for application:  username: ofig, password: mama2017. This is an account that has data (Books, Movies, Games, and Messages). You can use it to login to the application if you don’t want to create an account.
Instructions for application in AWS
Next are the instructions and links for the application. Please DO NOT REFRESH THE PAGE it will logout from the application and send you to the login page. Also, DO NOT CLICK ON THE NAVBAR BOOK ICON unless you want to logout and go to the login page. 
Login
Go to the AWS URL, fill out the form and click login. If the information coincides with login information for the user then you will see your dashboard. Else you will see a message that either the password or the username is wrong then you will need to try again.
Signup
Click on the signup button of the AWS URL. Fill out the form, make sure that the passwords fields coincide. Click on Create Account button. You will automatically be logged in and send to your dashboard.
Logout
Go to the navigation bar and click on Logout. Then click the logout button.
View/Send Messages
Click on the Message icon on the dashboard or go to the navigation menu and click on Message. To send a message click on the send button, fill out the form, and click Send.
View/Delete an Item
Click on the title of the book, movie, or game you want to see. To delete item just click on the delete button at the bottom of the popup. To close the popup just click close.
Add an Item
Click on the plus sign on the dashboard or go to the navigation bar and click on Add Item. Please select the item, the fill out the form, add image, and finally click Add item.
Help
Click on Help on the navigation bar.
View/Edit Profile
Click on Profile on the navigation bar. To edit profile, click on the Edit button. Enter the fields you want to change and click on Save Changes. The username can’t be changed. To change the password, you must type your old password and the new one.
Instructions for Application Code
Launching the code:
OPTION 1 VISUAL STUDIO NEEDS TO HAVE NODE.JS TOOL:
1.	Unzip file
2.	Find .sln file and open it. It should open the project in Visual Studio. 
3.	Build and Debug project. (I usually use start without debugging)
OPTION 2 VISUAL STUDIO NEEDS TO HAVE NODE.JS TOOL:
1.	Unzip file.
2.	Use Visual Studio. Go to File -> Open Solution -> Project/Solution.
3.	Go to file location and select the .sln file.
4.	Click Open.
5.	Build and Debug project. (I usually use start without debugging)

OPTION 3 VIEW CODE:
1.	Unzip file.
2.	Go to Bookrganizer/Bookrganizer/public/app.
3.	This is where the html and js files of the front end are located.
4.	Go to Bookrganizer/Bookrganizer.
5.	This is where the json and server.js can be found.
6.	Go to Bookrganizer/Bookrganizer/models.
7.	This is where the schema and models for mongoose are found.
8.	Go to Bookrganizer/Bookrganizer/public/scripts.
9.	This is where the scripts and libraries are located.
10.	 Go to Bookrganizer/Bookrganizer/public/Content.
11.	This is where the styles files and images are located.
12.	 Just use Notepad or other application to view the code.
OPTION 4 NETBEANS PROJECT:
1.	Unzip File
2.	Open Netbeans and click on open Project.
3.	Select Node JS Application with existing code.
4.	Choose Bookrganizer/Bookrganizer as the source folder.
5.	Follow the instructions.
6.	I tried and I got some error on loading the css files for the application. But you can see the code on Netbeans. I recommend not to run it because is not loading the css files. 
