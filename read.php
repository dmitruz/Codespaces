<?php
include 'includes/nav.php'; // Include navigation bar

require('connect_db.php'); // Connect to the database

// Fetch all records from 'products' table
$q = "SELECT * FROM products";
$r = mysqli_query($link, $q);

if (mysqli_num_rows($r) > 0) {
    echo '<div class="container mt-5"><div class="row">';
    while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
        echo '
        <div class="col-md-4 d-flex justify-content-center mb-3">
            <div class="card" style="width: 18rem;">
                <img src="' . $row['item_img'] . '" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title text-center">' . $row['item_name'] . '</h5>
                    <p class="card-text">' . $row['item_desc'] . '</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">£' . $row['item_price'] . '</li>
                    <li class="list-group-item text-center">
                        <a href="update.php?id=' . $row['item_id'] . '" class="btn btn-dark">Update</a>
                    </li>
                    <li class="list-group-item text-center">
                        <a href="delete.php?item_id=' . $row['item_id'] . '" class="btn btn-dark">Delete</a>
                    </li>
                </ul>
            </div>
        </div>';
    }
    echo '</div></div>';
} else {
    echo '<p>No products found.</p>';
}

// Close the database connection
mysqli_close($link);

include 'includes/footer.php'; // Include footer
?>