<?php
session_start();  // Start the session to track the logged-in user

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Database connection
    $conn = new mysqli("localhost", "root", "", "eusedstore");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Sanitize the inputs
    $email = $conn->real_escape_string($_POST['email']);
    $pass = $_POST['pass'];  // The raw password input from the user

    // Query to find the user by email
    $sql = "SELECT user_id, first_name, last_name, pass FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verify the password
        if (password_verify($pass, $row['pass'])) {
            // Store user information in the session
            $_SESSION['user_id'] = $row['user_id'];
            $_SESSION['user_name'] = strtoupper(substr($row['first_name'], 0, 1)) . strtoupper(substr($row['last_name'], 0, 1));

            // Redirect to the homepage after successful login
            header("Location: index.php");
            exit();
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "No user found with that email address.";
    }

    // Close the database connection
    $conn->close();
}
?>