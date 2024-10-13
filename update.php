<?php
include ( 'includes/nav.php' ) ;

if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
{
  # Connect to the database.
  require ('connect_db.php'); 

   $errors = array();

# Check for a item name.
  if ( empty( $_POST[ 'item_id' ] ) )
  { $errors[] = 'Update item ID.' ; }
  else
  { $id = mysqli_real_escape_string( $link, trim( $_POST[ 'item_id' ] ) ) ; }
  
  # Check for a item name.
  if ( empty( $_POST[ 'item_name' ] ) )
  { $errors[] = 'Update item name.' ; }
  else
  { $n = mysqli_real_escape_string( $link, trim( $_POST[ 'item_name' ] ) ) ; }

  # Check for a item description.
  if (empty( $_POST[ 'item_desc' ] ) )
  { $errors[] = 'Update item description.' ; }
  else
  { $d = mysqli_real_escape_string( $link, trim( $_POST[ 'item_desc' ] ) ) ; }

# Check for a item price.
  if (empty( $_POST[ 'item_img' ] ) )
  { $errors[] = 'Update image address.' ; }
  else
  { $img = mysqli_real_escape_string( $link, trim( $_POST[ 'item_img' ] ) ) ; }
  
  # Check for a item price.
  if (empty( $_POST[ 'item_price' ] ) )
  { $errors[] = 'Update item price.' ; }
  else
  { $p = mysqli_real_escape_string( $link, trim( $_POST[ 'item_price' ] ) ) ; }

  if ( empty( $errors ) ) 
  {
    $q = "UPDATE products SET item_id='$id',item_name='$n', item_desc='$d', item_img='$img', item_price='$p'  WHERE item_id='$id'";
    $r = @mysqli_query ( $link, $q ) ;
    if ($r)
    {
       header("Location: read.php");
    } else {
        echo "Error updating record: " . $link->error;
    }
       mysqli_close( $link );
  } 
}
?>
<form action="update.php" method="post" enctype="multipart/form-data">
  <!-- input box for item name  -->
  <label for="name">Item Name:</label>
  <input type="text" id="item_name" class="form-control" name="item_name" required value="<?php echo $current_item_name; ?>">

  <!-- input box for item description -->  
  <label for="description">Description:</label>
  <textarea id="item_desc" class="form-control" name="item_desc" required><?php echo $current_item_desc; ?></textarea>

  <!-- file upload for image -->
  <label for="image">Image:</label>
  <input type="file" id="item_img" class="form-control" name="item_img">

  <!-- input box for item price -->
  <label for="price">Price:</label>
  <input type="number" id="item_price" class="form-control" name="item_price" min="0" step="0.01" required value="<?php echo $current_item_price; ?>"><br>

  <!-- submit button -->
  <input type="submit" class="btn btn-dark" value="Update">
</form>