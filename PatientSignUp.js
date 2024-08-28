<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Healthcare Patient Sign Up</title>
    <style>
        /* Custom Body Classes */
        .body-default {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .body-alternate {
            font-family: 'Courier New', Courier, monospace;
            background-color: #e0e0e0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: #333;
        }

        /* Other styles remain the same */
        .signup-container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        .custom-heading {
            text-align: center;
            color: #4CAF50;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="date"] {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        label {
            font-weight: bold;
        }

        button {
            background-color: #4caf50;
            color: white;
            padding: 14px;
            width: 100%;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-footer {
            text-align: center;
        }
    </style>
</head>
<body class="body-default">
    <div class="signup-container">
        <h2 class="custom-heading">Patient Sign Up</h2>
        <form>
            <div class="form-group">
                <label for="name">Full Name
