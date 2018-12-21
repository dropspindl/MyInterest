# MyInterest

<img src="http://i68.tinypic.com/1zm2nit.png"  />

myInterest is pinterest clone I created on the Rails stack. It is fully seeded with my own interests and crafts.

## Live site

myInterest is hosted on Heroku and can be accessed [here](https://my-interest.herokuapp.com/#/login)

## Technologies

- Rails
- React/Redux
- Postgres
- Ajax
- jBuilder
- nvm
- Amazon Web Services

## Languages

- Ruby version 5.2
- JavaScript

## Challenges

One particular challenge was the Pin Builder feature, which allows for the creation of new pins.

<img src='http://i64.tinypic.com/kdakh0.png'/>

This required hooking up to Amazon Web Services as a database for hosting the uploaded images that are associated with each pin. The pin builder allows you to choose a file and shows a preview of the image before uploading.

Another difficult part of the PinBuilder was the ability to connect a pin to a board via a joins table. There is a dropdown in the form that is populated ONLY with boards owned by the current user. Upon submission of the form, first a pin is created, and then the newly generated pin ID is used to connect the pin to the board in the joins table.
