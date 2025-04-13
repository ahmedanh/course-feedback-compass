
<?php
require_once 'db.php';

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    
    // Delete the evaluation with the specified ID
    $sql = "DELETE FROM evaluations WHERE id = $id";
    
    if ($conn->query($sql) === TRUE) {
        header("Location: results.php?deleted=true");
        exit;
    } else {
        echo "Error deleting record: " . $conn->error;
    }
} else {
    // If no ID provided, redirect to results page
    header("Location: results.php");
    exit;
}
?>
