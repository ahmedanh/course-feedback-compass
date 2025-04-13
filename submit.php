
<?php
require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $rating = $conn->real_escape_string($_POST['rating']);

    $sql = "INSERT INTO evaluations (name, rating) VALUES ('$name', '$rating')";

    if ($conn->query($sql) === TRUE) {
        header("Location: results.php?status=success&name=" . urlencode($name));
        exit;
    } else {
        header("Location: index.php?error=1");
        exit;
    }
} else {
    // If not a POST request, redirect to the index page
    header("Location: index.php");
    exit;
}
?>
