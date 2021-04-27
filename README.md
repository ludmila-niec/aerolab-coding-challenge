# Aerolab's Coding Challenge 👩‍💻 🪁 ✨  [Live Demo](https://ludmila-niecz-aerolab-challenge.vercel.app/)
![views](/demo/mobile-views.png)

## Challenge Instructions
[Coding Challenge](https://aerolab.co/coding-challenge-instructions?utm_campaign=Coding%20Challenge)

## Goals
The challenge is to build a catalog view for a loyalty program app.
The product’s main goal is to help users redeem items through a points-based system.
Users have an undetermined amount of points accumulated, and each product is worth a set amount of points.
- Each product should have a visible price in points.
- The user should be able to sort products by price, from highest to lowest, and vice-versa.
- The user should be able to see how many points they have in their account.
- There should be a clear way for the user to distinguish those products that they can redeem from those they cannot.
- A “Redeem” button should be available for those products that the user has enough points to claim.
- A “Redeem now” option should appear when the user interacts with a product that they have enough points to claim.
- When the user doesn’t have enough points for a product, they should be able to see how many more points they need to claim it.
- The user should not be able to redeem a product for which they don’t have enough points.
- When the user clicks on the Redeem now button, the system should automatically deduct the item’s price from the users’ points.

## Screenshots
**Responsive Design - Mobile - Tablet - Desktop**
\
<img src="/demo/devices.png" width=600 alt="home page" >
<img src="/demo/category.png" width=600 alt="category page" >
<img src="/demo/redeem.png" width=600 alt="redeem demo" >
<img src="/demo/points.png" width=600 alt="add points demo" >
<img src="/demo/history.png" width=600 alt="history page" >

## Extra Features
- Responsive Design (Mobile first).
- Welcome page.
- Category Page.
- User's redeem history page.
- 404 page.
- Quick access to the different product categories.
- Quick access to the Add Points action. Choose between 100, 500, or 750 points to add to the user’s account.
- Quick access to user’s redeem history.
- Animations for smooth transitions.
- Toast notifications that provides status information, such as success or error, for “add points” and “redeem product” actions.
- A confirmation is required to redeem the product.
- Keyboard navigation.
- Accesibility.

## Technologies
- React.js
- React Hooks
- Styled-components
- React router
- Material-UI Icons


## How to use
To clone and run the app you will need git and node.js
\
**from the command line:**
```bash

git clone https://github.com/ludmila-niec/aerolab-coding-challenge.git

```
**Go into the repository**
```bash

cd aerolab

```
**Install the dependencies**
```bash

npm install

```
**Run the app**
```bash

npm start

```
**Open [localhost:3000](http://localhost:3000) to view it in the browser**
