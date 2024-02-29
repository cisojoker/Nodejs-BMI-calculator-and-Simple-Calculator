# Node.js Express Calculator & BMI Calculator
This repository contains two simple web applications built with Node.js and Express. The first is a basic calculator that performs addition of two numbers, and the second calculates the Body Mass Index (BMI) based on height and weight inputs.
# Features
**Basic Calculator:** Adds two numbers inputted by the user.

**BMI Calculator:** Calculates the BMI from the user's height and weight.

#Prerequisites
What things you need to install the software and how to install them:

Node.js

npm (Node Package Manager)

#How It Works

**Application Structure**

The project utilizes Express, a fast, unopinionated, minimalist web framework for Node.js, to handle HTTP requests and responses. body-parser middleware is used for parsing the body of incoming requests, which is essential for extracting form data.

**Basic Calculator**

The basic calculator allows users to add two numbers. Here's how it functions:

**User Interface:** A simple HTML form (cal.html) collects two numbers (num1 and num2) from the user.

**Form Submission:** Upon submission, the form data is sent to the server using a POST request.

**Server Processing:**

The server extracts the numbers from the request body, converts them to numbers (if necessary), and calculates the sum.
It then sends a response back to the client, displaying the result of the addition.
Displaying the Result: The user sees the result displayed on their screen.

**BMI Calculator**

The BMI calculator works similarly but is tailored for calculating the Body Mass Index:

**User Interface:** A separate HTML form (bmi.html) collects the user's weight and height.

**Form Submission:** The form data is sent to the server using a POST request upon submission.

**Server Processing:**

The server retrieves the weight and height from the request body, calculates the BMI using the formula BMI=weight/(height*height), and then sends the calculated BMI 
back to the client.

**Displaying the Result:** The client displays the BMI to the user.
