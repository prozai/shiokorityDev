# ShiokorityAPI Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Base URL](#base-url)
3. [Authentication](#authentication)
4. [Admin Endpoints](#admin-endpoints)
   - [Login Admin](#login-admin)
   - [Logout Admin](#logout-admin)
   - [Create Merchant](#create-merchant)
   - [View Merchants](#view-merchants)
   - [Get Merchant by ID](#get-merchant-by-id)
   - [Edit Merchant](#edit-merchant)
   - [Update Merchant Status](#update-merchant-status)
5. [Merchant Endpoints](#merchant-endpoints)
   - [Login Merchant](#login-merchant)
   - [Logout Merchant](#logout-merchant)
   - [Get Merchant Profile](#get-merchant-profile)
   - [Update Merchant Profile](#update-merchant-profile)

## Introduction

The ShiokorityAPI provides endpoints for managing merchants and admin operations. This documentation outlines the available endpoints, their functionalities, and how to use them.

## Base URL

All API requests should be made to the following base URL:

```
https://shiokority.online
```

## Authentication

Some endpoints require authentication. Make sure to include the necessary authentication headers or tokens as specified in each endpoint's description.

## Admin Endpoints

### Login Admin

- **URL**: `/login/admin`
- **Method**: POST
- **Description**: Authenticate an admin user.
- **Request Body**:
  ```json
  {
    "email": "admin1@example.com",
    "password": "password1"
  }
  ```
- **Response**: Returns authentication token or session information.

### Logout Admin

- **URL**: `/logout/admin`
- **Method**: POST
- **Description**: Log out an admin user.
- **Response**: Confirms successful logout.

### Create Merchant

- **URL**: `/create-merchant`
- **Method**: POST
- **Description**: Create a new merchant account.
- **Request Body**:
  ```json
  {
    "name": "merchant3",
    "email": "merchant3@gmail.com",
    "phone": "333",
    "address": "333"
  }
  ```
- **Response**: Confirms merchant creation or returns error.

### View Merchants

- **URL**: `/admin/view-merchant`
- **Method**: GET
- **Description**: Retrieve a list of all merchants.
- **Response**: Returns a list of merchant information.

### Get Merchant by ID

- **URL**: `/admin/merchants/{id}`
- **Method**: GET
- **Description**: Retrieve information for a specific merchant.
- **Parameters**: 
  - `id`: The ID of the merchant
- **Response**: Returns detailed information about the specified merchant.

### Edit Merchant

- **URL**: `/admin/merchants/{id}`
- **Method**: PUT
- **Description**: Update information for a specific merchant.
- **Parameters**:
  - `id`: The ID of the merchant
- **Request Body**:
  ```json
  {
    "merch_name": "merchant11",
    "merch_email": "merchant11@gmail.com",
    "merch_phone": "112"
  }
  ```
- **Response**: Confirms successful update or returns error.

### Update Merchant Status

- **URL**: `/admin/suspend-merchants/{id}`
- **Method**: PUT
- **Description**: Update the status of a merchant (e.g., suspend or activate).
- **Parameters**:
  - `id`: The ID of the merchant
- **Request Body**:
  ```json
  {
    "status": 0
  }
  ```
- **Response**: Confirms status update or returns error.

## Merchant Endpoints

### Login Merchant

- **URL**: `/login`
- **Method**: POST
- **Description**: Authenticate a merchant user.
- **Request Body**:
  ```json
  {
    "merch_email": "merch2@example.com",
    "password": "password2"
  }
  ```
- **Response**: Returns authentication token or session information.

### Logout Merchant

- **URL**: `/logout`
- **Method**: POST
- **Description**: Log out a merchant user.
- **Response**: Confirms successful logout.

### Get Merchant Profile

- **URL**: `/profile`
- **Method**: GET
- **Description**: Retrieve the profile information for the logged-in merchant.
- **Response**: Returns detailed profile information for the merchant.

### Update Merchant Profile

- **URL**: `/update`
- **Method**: PUT
- **Description**: Update the profile information for the logged-in merchant.
- **Request Body**:
  ```json
  {
    "merch_name": "Merchant2",
    "merch_email": "merch2@example.com",
    "merch_phone": "Phone2"
  }
  ```
- **Response**: Confirms successful update or returns error.

## User Guide

1. **Authentication**:
   - For admin operations, use the "Login Admin" endpoint to authenticate.
   - For merchant operations, use the "Login Merchant" endpoint.
   - Store the returned authentication token or session information for subsequent requests.

2. **Admin Operations**:
   - Use the admin endpoints to manage merchants, view their information, and update their status.
   - Always ensure you're authenticated as an admin before accessing these endpoints.

3. **Merchant Operations**:
   - Merchants can use the merchant endpoints to view and update their own profile information.
   - Ensure authentication as a merchant before accessing these endpoints.

4. **Error Handling**:
   - Always check the response status and body for any error messages or validation issues.
   - Handle errors gracefully in your application.

5. **Logout**:
   - Always use the appropriate logout endpoint when finishing a session to ensure proper security.

6. **Data Formats**:
   - All request and response bodies use JSON format.
   - Ensure your application can parse and generate valid JSON.

7. **Testing**:
   - Use tools like Postman to test the API endpoints before integrating them into your application.
   - Pay attention to the required request body format and parameters for each endpoint.

Remember to handle authentication tokens securely and never expose sensitive information in client-side code. Always validate and sanitize input data before sending it to the API.
