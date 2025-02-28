let products = [];

// Function to add a product to the list
const addProduct = (obj) => {
    const exists = products.some((p) => {
        return p.id === obj.id;
    });
    if (!exists) {
       return products.push(obj);
    }
};

// Function to delete a product from the list
const deleteProduct = (id) => {
    // The filter function returns a new array, but you are not updating the products array
    products = products.filter((p) => p.id !== id);
};

// Function to get all products
const getProducts = () => {
    return products;
};

// Function to retrieve a product by id
const retrieveProduct = (id) => {
    // The filter function returns an array, but you are not returning it
    return products.filter((p) => {
        return p.id === id;
    });
};

// Function to update a product by id
const updateProduct = (id, obj) => {
    // The map function is not suitable here as it is used for transforming arrays
    products.map((p, i) => {
        if (p.id === id) {
            products[i] = obj; // Use assignment operator instead of comparison operator
        }
    });
};

const obj = { id: 1, name: "Soumik" };

console.log(products);
console.log(addProduct(obj));
console.log(addProduct(obj));
console.log(products);

