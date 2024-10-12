
<?php
 include 'includes/nav.php';
 require ( 'connect_db.php' );
	
	# Retrieve items from 'products' database table.
	$q = "SELECT * FROM products" ;
	$r = mysqli_query( $link, $q ) ;
	if ( mysqli_num_rows( $r ) > 0 )

    while ( $row = mysqli_fetch_array( $r, MYSQLI_ASSOC ))
{
echo '
  <div class="col-md-3 d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
	 <img src='. $row['item_img'].' class="card-img-top" alt="T-Shirt">
	  <div class="card-body">
	   <h5 class="card-title text-center">' . $row['item_name'] .'</h5>
	   <p class="card-text">'. $row['item_desc'] . '</p>
     </div>
	  <ul class="list-group list-group-flush">
	   <li class="list-group-item"><p class="text-center">&pound' . $row['item_price'] . '</p></li>
	   <li class="list-group-item btn btn-dark"><a class="btn btn-dark btn-lg btn-block" href="update.php?id='.$row['item_id'].'">
	   Update</a></li>
	   <li class="list-group-item"><a class="btn btn-dark" href="delete.php?item_id='.$row['item_id'].'">
	   Delete Item</a></li>
	  </ul>
	</div>
  </div>';
  }
  mysqli_close( $link) ; 
    else { echo '<p>There are currently no items in the table to display.</p>
	' ; }

// Check if the form was submitted
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
{
  // Connect to the database
  require ('connect_db.php'); 

  // Initialize an error array
  $errors = array();

  // Check for item name
  if ( empty( $_POST[ 'item_name' ] ) )
  { 
    $errors[] = 'Enter the item name.'; 
  }
  else
  { 
    $n = mysqli_real_escape_string( $link, trim( $_POST[ 'item_name' ] ) ); 
  }

  // Check for item description
  if (empty( $_POST[ 'item_desc' ] ) )
  { 
    $errors[] = 'Enter the item description.'; 
  }
  else
  { 
    $d = mysqli_real_escape_string( $link, trim( $_POST[ 'item_desc' ] ) ); 
  }

  // Check for item image
  if (empty( $_POST[ 'item_img' ] ) )
  { 
    $errors[] = 'Enter the item image.'; 
  }
  else
  { 
    $img = mysqli_real_escape_string( $link, trim( $_POST[ 'item_img' ] ) ); 
  }

  // Check for item price
  if (empty( $_POST[ 'item_price' ] ) )
  { 
    $errors[] = 'Enter the item price.'; 
  }
  else
  { 
    $p = mysqli_real_escape_string( $link, trim( $_POST[ 'item_price' ] ) ); 
  }

  // If no errors, insert the data into the database
  if ( empty( $errors ) ) 
  {
    $q = "INSERT INTO products (item_name, item_desc, item_img, item_price) 
          VALUES ('$n','$d', '$img', '$p')";
    $r = @mysqli_query( $link, $q );
    if ($r)
    {
      echo '<p>New record created successfully</p>';
    }

    // Close the database connection
    mysqli_close($link); 
    exit();
  }
  // If there are errors, display them
  else 
  {
    echo '<p>The following error(s) occurred:</p>' ;
    foreach ( $errors as $msg )
    {
      echo "$msg<br>" ;
    }
    echo '<p>Please try again.</p></div>';
    
    // Close the database connection
    mysqli_close( $link );
  }
}

?>

<h1>Add Item</h1>
<form action="create.php" method="post">
  <!-- input box for item name  -->
  <label for="name">Item Name:</label>
  <input type="text" id="item_name" class="form-control" name="item_name" required value="<?php if (isset($_POST['item_name'])) echo $_POST['item_name']; ?>">

  <!-- input box for item description -->  
  <label for="description">Description:</label>
  <textarea id="item_desc" class="form-control" name="item_desc" required><?php if (isset($_POST['item_desc'])) echo $_POST['item_desc']; ?></textarea>

  <!-- input box for image path -->
  <label for="image">Image:</label>
  <input type="text" id="item_img" class="form-control" name="item_img" required value="<?php if (isset($_POST['item_img'])) echo $_POST['item_img']; ?>">

  <!-- input box for item price -->
  <label for="price">Price:</label>
  <input type="number" id="item_price" class="form-control" name="item_price" min="0" step="0.01" required value="<?php if (isset($_POST['item_price'])) echo $_POST['item_price']; ?>"><br>

  <!-- submit button -->
  <input type="submit" class="btn btn-dark" value="Submit">
</form>

<?php
 include 'includes/footer.php';
?>