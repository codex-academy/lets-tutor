# Lets tutor

Create a web application that allows people to register as tutors for a selected subject. Students can search for Tutors they can afford and send them a message. Tutors can see the messages Students sent them.

When Tutors register they should specify their:

  * firstName
  * lastName
  * email

Once registered Tutors can login using their email address and select a Subject they would like to tutor, they can only be registered to tutor one Subject.

Tutors should be able to:

  * select the Subject they would like to tutor from a list
  * state their hourly rate
  * see all the messages sent to them by students
  * change the Subject they tutor

## Routes

|  Route name          | Description                  |
|----------------------|------------------------------|
| /subjects            | Show all available subjects  |
| /subjects/add        | Add a new subject            |
| /tutors/register     | Register as a new Tutor      |
| /login               | Login as a tutor             |
| /tutors/dashboard    | Show tutor details, subjects & messages |
| /tutors/subject      | Register to tutor a subject  |
| /search              | Search for a tutor           |
| /message             | Message tutor                |


## Run the application

To run the application you need NodeJS, npm, git and MongoDB installed locally.

Clone this repo from git.

In a terminal window

Install all the external dependencies using:

```
cd let-tutor
npm install
```

Start the application in the `lets-tutor` folder using:

```
node index.js
```



