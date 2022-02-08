# „Golden Book” Bookstore - WEB

![Heroku](https://github.com/DenisOH/pyheroku-badge/blob/master/img/deployed.svg)
\
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
\
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
\
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
\
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
\
Bookstore e-commerce focused on functionalities, not on design.

## Functionalities

The bookstore has following functionalities:

1. Order books through a multi-step form
2. Register / Authenticate with Google
3. Register / Authenticate with email and password
4. View all-time personal orders in profile
5. View current order status

The app is built using `Next.JS` with `Chakra UI` and `Redux` for state management.
\
Data is stored in a `MongoDB Atlas` cluster.

## How to use (local)

1. Clone the [server](https://github.com/JusticeBringer/licenta-api) `git clone https://github.com/JusticeBringer/golden-book-bookstore-api.git`
2. Install required dependencies of the server `npm i`
3. Start, in this order, `mongod` and `mongo` processes
4. Add a `.env` file with `NODE_ENV=development`
5. Add a `.env.development` and fill in the variables similar to the `.env.development.example` file
6. Run `npm run start_local` on the server
7. Clone the [web app](https://github.com/JusticeBringer/golden-book-bookstore-web) `git clone https://github.com/JusticeBringer/golden-book-bookstore-web.git`
8. Install required dependencies of the web app `npm i`
9. Run `npm run dev` on the web app

## Flow of the app for authenticated user

User adds some books to cart by clicking „Add to cart” and then goes to „Cart” page. Fills in the checkout details and goes to account page to see the order summary.
\
![](/screenshots/flow-app-auth-user.gif)
\
\
This is the order in the database:
\
![order](/screenshots/after-checkout4.png)

For those who are not authenticated, a modal will appear before entering the checkout process.
\
![Account needed modal](/screenshots/auth-before-checkout.png)

## Registration

There are 2 ways for registration:

1. With Google account
2. By email and password.

On 8 June 2022, registration by email and password will be closed.

### Registration flow with Google

![](/screenshots/registration-flow-with-Google.gif)
\
\
Each user is saved into the database
\
![User saved to database](/screenshots/register5.png)

### Registration flow with email and password

![](/screenshots/register-with-email-flow.gif)
\
\

If user clicks the activation link again, he will get this message:
\
![](/screenshots/register-email5.png)

![User saved to database](/screenshots/register-email4.png)
\
(before user clicks the activation link, the field `isVerifiedEmail` has value of `false`)

## Redux

This project uses `Redux` as the state container management, wrapped in [next-redux-wrapper](https://www.npmjs.com/package/next-redux-wrapper) npm package.

All reducers used:

```js
export const allReducers = combineReducers({
  authenticated: authenticationReducer,
  shoppingCart: shoppingCartReducer,
  books: booksReducer,
  updatingStore: updatingStoreReducer,
  snackbar: snackbarReducer,
  user: userReducer
});
```

Below is a view on the Redux state and some actions that were dispatched.
\
![](/screenshots/redux-view.png)

## Document models

```
import { Document } from 'mongoose';
```

All database models extend `Document` from `mongoose` and use `Typescript` interfaces, so every model can raise compile errors.

Project models:

- admin
- book
- cd
- order
- payment
- review
- user

## Mailgun dashboard

Below is a view of the mailgun dashboard, where we can see emails sent for users email activation.
\
![](/screenshots/mailgun-dashboard.png)
\
Please note that, as stated above, on 8 June 2022, registration by email and password will be closed, hence also the email activation links.

## Technologies used

- Next.JS with Chakra UI, Typescript, SCSS

## Hosting

The web app is hosted on Heroku [here](https://golden-book-bookstore-web.herokuapp.com/)
\
API is also hosted on Heroku [here](https://golden-book-bookstore-api.herokuapp.com/)
\

## Contributor

- [Me - Gabriel Arghire](https://github.com/JusticeBringer/) 100%

## License

License of this project is `GNU GPL v3`
