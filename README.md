# Jenosize E-commerce API

A RESTful API for managing products in an e-commerce platform.

## Setup Instructions

1. Prerequisites:
   - Node.js (v14 or higher)
   - MongoDB (v4.4 or higher)

2. Installation:
   ```bash
   # Clone the repository
   git clone <repository-url>
   cd ecommerce-api-demo

   # Install dependencies
   npm install

   # Create .env file and configure environment variables
   cp .env.example .env
   # Edit .env with your MongoDB URI and desired port
   ```

3. Running the Application:
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Create Product
- **POST** `/api/products`
- Request Body:
  ```json
  {
    "name": "Product Name",
    "price": 99.99,
    "stockQuantity": 100
  }
  ```

### Get Products
- **GET** `/api/products`
- Query Parameters:
  - `sort`: `asc` (default) or `desc` for price sorting
- Response:
  ```json
  {
    "status": "success",
    "data": [
      {
        "name": "Product Name",
        "price": 99.99,
        "stockQuantity": 100,
        "createdAt": "2024-01-11T..."
      }
    ]
  }
  ```

## Error Handling

The API includes comprehensive error handling for:
- Invalid input validation
- Database errors
- Server errors

## Project Structure
```
src/
├── controllers/     # Request handlers
├── models/         # Database models
├── routes/         # API routes
├── validation/     # Input validation
├── middleware/     # Custom middleware
└── index.js        # Application entry point
```

## Testing the API

You can test the API using cURL or Postman:

```bash
# Create a product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","price":29.99,"stockQuantity":50}'

# Get products (sorted by price ascending)
curl http://localhost:3000/api/products

# Get products (sorted by price descending)
curl http://localhost:3000/api/products?sort=desc
```
