import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      username: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      username: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: 'shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: 'shirt2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: 'shirt3.jpg',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: 'pants1.jpg',
      price: 90,
      brand: 'Oliver',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: 'pants2.jpg',
      price: 95,
      brand: 'Zara',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: 'pants3.jpg',
      price: 75,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 0,
      description: 'A popular pants',
    }, {
      name: 'Free Shirt',
      slug: 'free-shirt2',
      category: 'Shirts',
      image: 'shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Fit Shirt 2',
      slug: 'fit-shirt2',
      category: 'Shirts',
      image: 'shirt2.jpg',
      price: 780,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim Shirt 2',
      slug: 'slim-shirt2',
      category: 'Shirts',
      image: 'shirt3.jpg',
      price: 190,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants 2',
      slug: 'golf-pants2',
      category: 'Pants',
      image: 'pants1.jpg',
      price: 910,
      brand: 'Oliver',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants 2',
      slug: 'fit-pants2',
      category: 'Pants',
      image: 'pants2.jpg',
      price: 265,
      brand: 'Zara',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants 2',
      slug: 'classic-pants2',
      category: 'Pants',
      image: 'pants3.jpg',
      price: 175,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 0,
      description: 'A popular pants',
    }, {
      name: 'Free Shirt 2',
      slug: 'free-shirt3',
      category: 'Shirts',
      image: 'shirt1.jpg',
      price: 55,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Fit Shirt 3',
      slug: 'fit-shirt3',
      category: 'Shirts',
      image: 'shirt2.jpg',
      price: 812,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim Shirt 3',
      slug: 'slim-shirt3',
      category: 'Shirts',
      image: 'shirt3.jpg',
      price: 174,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants 3',
      slug: 'golf-pants3',
      category: 'Pants',
      image: 'pants1.jpg',
      price: 554,
      brand: 'Oliver',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants 3',
      slug: 'fit-pants3',
      category: 'Pants',
      image: 'pants2.jpg',
      price: 755,
      brand: 'Zara',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants 3',
      slug: 'classic-pants3',
      category: 'Pants',
      image: 'pants3.jpg',
      price: 199,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 0,
      description: 'A popular pants',
    },
  ],
};
export default data;