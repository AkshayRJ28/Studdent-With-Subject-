# Studdent-With-Subject-

Setup and Running Instructions
Backend Setup
Clone the Repository

To get started, clone the repository by using the following link or download it as a ZIP file:

Repository Link: https://github.com/AkshayRJ28/Studdent-With-Subject-.git
change branch to master from main
Import the Backend Project into Eclipse

Open Eclipse.
Import the project:
Go to File > Import.
Select Existing Maven Projects and click Next.
Browse to the directory where you cloned the repository, select the project, and click Finish.
Configure MySQL Connection

Open the application.properties file located in src/main/resources.

Update the MySQL configuration with your server's username and password:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/studentsubject
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
Create the Database Schema

Create a schema in your MySQL server named studentsubject.
Run the Backend Project

In Eclipse, navigate to src/main/java.
Locate the com.api.StudentSubjectManagementApplication class.
Right-click the class and select Run As > Java Application.
Your backend project should now be running on Tomcat server at port 8080.
Frontend Setup
Install Node.js and npm

Ensure that Node.js and npm are installed on your PC. If not, download and install them from the official Node.js website.
Start the Frontend Project

Open a terminal window.

Navigate to the frontend project directory.

Run the following command to start the Angular application:

bash
Copy code
npm start
Your Angular application should now be running and accessible.

Testing the Application
With both the backend and frontend running, you can now test the application to ensure everything is functioning as expected.
Support
If you have any questions or encounter issues, please feel free to contact me at my mail -> Akshay.rj2784@gmail.com
This guide should provide clear instructions for setting up and running your project. If you need any further assistance or clarification, let me know!
