<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // If not logged in, redirect to the login page
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Header with Navigation -->
    <header class="bg-light border-bottom">
        <div class="container-fluid d-flex justify-content-between align-items-center py-3 m-0">
            <div class="logo">
                <a href="#" class="navbar-brand">Your Logo</a>
            </div>
            <nav class="ms-auto">
                <ul class="nav">
                    <?php if (isset($_SESSION['user_id'])): ?>
                        <!-- Display first letters of the user's name next to Sign Out -->
                        <li class="nav-item"><a class="nav-link" href="signout.php">Sign Out (<?= $_SESSION['user_name']; ?>)</a></li>
                    <?php else: ?>
                        <!-- If user is not logged in, show sign up and login links -->
                        <li class="nav-item"><a class="nav-link" href="signup.php">Sign Up</a></li>
                        <li class="nav-item"><a class="nav-link" href="login.php">Login</a></li>
                    <?php endif; ?>
                      <li class="nav-item">
                    <a href="create.php" class="btn btn-dark">Add Product</a> 
                </li>
                    <li class="nav-item"><a class="nav-link" href="#">Shopping Cart</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content Area -->
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar and Main Content -->
                <!-- Sidebar with Categories -->
            <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                <div class="position-sticky">
                    <h5 class="sidebar-heading">Catalog</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="index.php">All</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.php?category=Fridge">Fridges</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.php?category=Microwave">Microwaves</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.php?category=Washing Machine">Washing Machines</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.php?category=TV">TVs</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Main Section for Images -->
            <main class="col-md-9 col-lg-10">
                <div class="container mt-4">
                    <div class="row">
                        <?php
                        // Database connection
                        $conn = new mysqli("localhost", "root", "", "eusedstore");

                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }

                        // Get the selected category from URL
                        $category = isset($_GET['category']) ? $_GET['category'] : '';

                        // Sanitize the category to avoid SQL injection
                        $category = $conn->real_escape_string($category);

                        // Query to get images from database based on category
                        if (!empty($category)) {
                            // Filtering images by product name that matches the selected category
                            $sql = "SELECT product_name, image_path FROM product_images WHERE product_name LIKE '%$category%'";
                        } else {
                            // If no category is selected, show all images
                            $sql = "SELECT product_name, image_path FROM product_images";
                        }

                        // Debugging: Echo the SQL query (you can remove this after debugging)
                        // echo "SQL Query: " . $sql . "<br>";

                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo '<div class="col-12 col-sm-6 col-lg-3 mb-4 border border-dark p-1">';
                                echo '<img src="'.$row['image_path'].'" class="img-fluid" alt="'.$row['product_name'].'">';
                                echo '</div>';
                            }
                        } else {
                            echo "No images found for the selected category.";
                        }

                        $conn->close();
                        ?>
                    </div>
                </div>
                    </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>