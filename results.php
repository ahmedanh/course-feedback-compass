
<?php
require_once 'db.php';

// Fetch all evaluations ordered by submission time (newest first)
$sql = "SELECT * FROM evaluations ORDER BY submitted_at DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Survey Results</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Course Evaluation Results</h1>
            <nav>
                <ul>
                    <li><a href="index.php">Survey</a></li>
                    <li><a href="results.php" class="active">Results</a></li>
                </ul>
            </nav>
        </header>
        
        <main>
            <?php if (isset($_GET['status']) && $_GET['status'] === 'success'): ?>
                <div class="alert alert-success">
                    Thank you, <?php echo htmlspecialchars($_GET['name']); ?>, for your feedback!
                </div>
            <?php endif; ?>

            <?php if (isset($_GET['deleted']) && $_GET['deleted'] === 'true'): ?>
                <div class="alert alert-success">
                    The evaluation has been removed successfully.
                </div>
            <?php endif; ?>

            <div class="card">
                <h2>All Evaluations</h2>
                
                <?php if ($result->num_rows > 0): ?>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Submitted</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while($row = $result->fetch_assoc()): 
                                $ratingClass = strtolower(str_replace(' ', '-', $row['rating']));
                            ?>
                                <tr>
                                    <td><?php echo htmlspecialchars($row['name']); ?></td>
                                    <td>
                                        <span class="rating rating-<?php echo $ratingClass; ?>">
                                            <?php echo htmlspecialchars($row['rating']); ?>
                                        </span>
                                    </td>
                                    <td><?php echo date('M j, Y, g:i a', strtotime($row['submitted_at'])); ?></td>
                                    <td>
                                        <a href="delete.php?id=<?php echo $row['id']; ?>" 
                                           class="btn btn-danger"
                                           onclick="return confirm('Are you sure you want to delete this evaluation?')">
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            <?php endwhile; ?>
                        </tbody>
                    </table>
                <?php else: ?>
                    <p>No evaluations submitted yet.</p>
                <?php endif; ?>
            </div>
        </main>
        
        <footer>
            <p>&copy; <?php echo date("Y"); ?> Course Survey System</p>
        </footer>
    </div>
</body>
</html>
