//Task-1

const apiURL = "https://fakestoreapi.com/products";

fetch(apiURL)
    .then(response => response.json())
    .then(products => {

        // Display all products

        console.log("========== ALL PRODUCTS ==========");

        products.forEach(product => {
            console.log("Product Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Category:", product.category);
            console.log("----------------------------");
        });


        // map()

        let titleAndPrice = products.map(product => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log("Title and Price:");
        console.log(titleAndPrice);


        // filter()

        let expensiveProducts = products.filter(product => {
            return product.price > 100;
        });

        console.log("Products above $100:");
        console.log(expensiveProducts);


        // find()

        let electronicsProduct = products.find(product => {
            return product.category === "electronics";
        });

        console.log("First Electronics Product:");
        console.log(electronicsProduct);


        // reduce()

        let totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log("Total Price: $" + totalPrice.toFixed(2));


        // sort()

        let sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log("Highest to Lowest:");
        console.log(sortedProducts);

    })
    .catch(error => {
        console.log("Error fetching products:", error);
    })
    .finally(() => {
        console.log("Product API operation completed.");
    });

///////////////////////////////////////////////////////////

//Task-2

const dashboardURL = "https://fakestoreapi.com/products";

function createDashboard(products) {

    let totalProducts = products.length;


    let electronics = products.filter(product => {
        return product.category === "electronics";
    });


    let jewelery = products.filter(product => {
        return product.category === "jewelery";
    });


    let mensClothing = products.filter(product => {
        return product.category === "men's clothing";
    });


    let womensClothing = products.filter(product => {
        return product.category === "women's clothing";
    });


    let sortedPrices = [...products].sort((a, b) => {
        return b.price - a.price;
    });


    let highestPrice = sortedPrices[0].price;


    let lowestPrice = sortedPrices[sortedPrices.length - 1].price;


    let totalPrice = products.reduce((total, product) => {
        return total + product.price;
    }, 0);


    let averagePrice = totalPrice / products.length;


    console.log("===== PRODUCT DASHBOARD =====");

    console.log(`Total Products: ${totalProducts}`);

    console.log(`Electronics: ${electronics.length}`);
    console.log(`Jewelery: ${jewelery.length}`);
    console.log(`Men's Clothing: ${mensClothing.length}`);
    console.log(`Women's Clothing: ${womensClothing.length}`);

    console.log(`Highest Price: $${highestPrice.toFixed(2)}`);
    console.log(`Lowest Price: $${lowestPrice.toFixed(2)}`);
    console.log(`Average Price: $${averagePrice.toFixed(2)}`);
}


fetch(dashboardURL)
    .then(response => response.json())
    .then(products => {
        createDashboard(products);
    })
    .catch(error => {
        console.log("Error:", error);
    });

///////////////////////////////////////////////////////////

//Task-3

const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";


// Fetch Users

fetch(usersURL)
    .then(response => response.json())
    .then(users => {


        // Display all user names

        console.log("========== USER NAMES ==========");

        users.forEach(user => {
            console.log(user.name);
        });


        // Display user name + email

        console.log("========== USER DETAILS ==========");

        users.forEach(user => {
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log("----------------------------");
        });


        // Find user with ID 5

        let user5 = users.find(user => {
            return user.id === 5;
        });

        console.log("User with ID 5:");
        console.log(user5);


        // Filter users from a particular city

        let city = "South Christy";

        let cityUsers = users.filter(user => {
            return user.address.city === city;
        });

        console.log(`Users from ${city}:`);
        console.log(cityUsers);

    })
    .catch(error => {
        console.log("Error fetching users:", error);
    });


// Fetch Posts

fetch(postsURL)
    .then(response => response.json())
    .then(posts => {


        // Posts written by user ID 1

        let userPosts = posts.filter(post => {
            return post.userId === 1;
        });

        console.log("========== POSTS BY USER 1 ==========");

        userPosts.forEach(post => {
            console.log(post.title);
        });


        // Count posts

        console.log(`User 1 created ${userPosts.length} posts.`);


        // First post with title more than 50 characters

        let longTitlePost = posts.find(post => {
            return post.title.length > 50;
        });

        console.log("First post with title longer than 50 characters:");
        console.log(longTitlePost);

    })
    .catch(error => {
        console.log("Error fetching posts:", error);
    });

///////////////////////////////////////////////////////////

//Task-4

const searchURL = "https://fakestoreapi.com/products";


let searchCategory = prompt("Enter product category:");


let maximumPrice = Number(prompt("Enter maximum price:"));


function searchProducts(products, category, maxPrice) {

    let filteredProducts = products.filter(product => {
        return product.category === category &&
               product.price <= maxPrice;
    });


    console.log("========== SEARCH RESULTS ==========");


    if(filteredProducts.length === 0) {

        console.log("No products found.");

    } else {

        filteredProducts.forEach(product => {

            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("----------------------------");

        });

    }
}


fetch(searchURL)
    .then(response => response.json())
    .then(products => {

        searchProducts(
            products,
            searchCategory,
            maximumPrice
        );

    })
    .catch(error => {
        console.log("Error:", error);
    });

///////////////////////////////////////////////////////////

//Task-5

const cartURL = "https://fakestoreapi.com/products";

let cart = [];


fetch(cartURL)
    .then(response => response.json())
    .then(products => {


        // Display available products

        console.log("========== AVAILABLE PRODUCTS ==========");

        products.forEach(product => {

            console.log(
                `ID: ${product.id} | ${product.title} | $${product.price}`
            );

        });


        // Select products

        let selectedIDs = prompt(
            "Enter product IDs separated by commas:"
        );


        let ids = selectedIDs
            .split(",")
            .map(id => Number(id.trim()));


        // Add products to cart

        ids.forEach(id => {

            let product = products.find(product => {
                return product.id === id;
            });


            if(product) {
                cart.push(product);
            }

        });


        // Display cart

        console.log("========== CART ==========");

        cart.forEach((product, index) => {

            console.log(
                `Product ${index + 1}: ${product.title}`
            );

            console.log(
                `Price: $${product.price}`
            );

        });


        // Calculate total

        let total = cart.reduce((sum, product) => {
            return sum + product.price;
        }, 0);


        // Discount

        let discount = 0;

        if(total > 200) {

            discount = 20;

        } else if(total > 100) {

            discount = 10;

        }


        let discountAmount = total * (discount / 100);

        let finalAmount = total - discountAmount;


        // Cart summary

        console.log("========== CART SUMMARY ==========");

        console.log(`Total: $${total.toFixed(2)}`);
        console.log(`Discount: ${discount}%`);
        console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
        console.log(`Final Amount: $${finalAmount.toFixed(2)}`);

    })
    .catch(error => {
        console.log("Error:", error);
    });

///////////////////////////////////////////////////////////

//Task-6

const reportURL = "https://fakestoreapi.com/products";


fetch(reportURL)
    .then(response => response.json())
    .then(products => {


        console.log("========== PRODUCT REPORT ==========");


        // Display all products

        console.log("========== ALL PRODUCTS ==========");

        products.forEach(product => {

            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("----------------------------");

        });


        // Product names

        let productNames = products.map(product => {
            return product.title;
        });


        console.log("========== PRODUCT NAMES ==========");

        console.log(productNames);


        // Products above $100

        let expensiveProducts = products.filter(product => {
            return product.price > 100;
        });


        console.log("========== PRODUCTS ABOVE $100 ==========");

        console.log(expensiveProducts);


        // Electronics product

        let electronicsProduct = products.find(product => {
            return product.category === "electronics";
        });


        console.log("========== ELECTRONICS PRODUCT ==========");

        console.log(electronicsProduct);


        // Total price

        let totalValue = products.reduce((total, product) => {
            return total + product.price;
        }, 0);


        console.log(
            `Total Product Value: $${totalValue.toFixed(2)}`
        );


        // some()

        let anyAbove500 = products.some(product => {
            return product.price > 500;
        });


        console.log(
            `Any Product Above $500: ${anyAbove500}`
        );


        // every()

        let allAbove1 = products.every(product => {
            return product.price > 1;
        });


        console.log(
            `All Products Above $1: ${allAbove1}`
        );


        // sort()

        let sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });


        console.log("========== HIGHEST → LOWEST ==========");

        sortedProducts.forEach(product => {

            console.log(
                `${product.title} - $${product.price}`
            );

        });

    })
    .catch(error => {

        console.log("Error fetching products:", error);

    })
    .finally(() => {

        console.log("========== PRODUCT REPORT COMPLETED ==========");

    });

///////////////////////////////////////////////////////////

