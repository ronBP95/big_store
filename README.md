# Welcome to the Big Store!

Live View: <a>https://bigstore.gatsbyjs.io/</a>

### Features

1. <a href="/auth">Auth</a>
2. <a href="/products">Products</a>
3. <a href="/cart">Cart</a>
4. <a href="/checkout">Checkout</a>
5. <a href="/email">Email</a>
6. <a href="/email">Google Analytics</a>

### Authentication

The authentication was built out using CRUD routes in Express and stored in a MongoDB database. Users sign their ID property with a json webtoken that expires after a certain amount of time.

### Products

Products were pulled from the Fake Store API and mapped out into different components included Cart & Checkout.

### Cart

A modal was built out using React with Material-UI and maps out the cart property of a user object in MongoDB. This includes and add and remove option for products in the cart

### Checkout

Checkout takes the price of all of the items and empties out the cart.

### Email / Analyitics (Planned Features)

The SendGrid API will be used to send email receipts of the order that was made and will use the email address of the users sign in credentials. Google Analytics has been implemented on my portfolio website and will be implemented here to see if user activity is present.
