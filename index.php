
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Survey</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Course Evaluation Survey</h1>
            <nav>
                <ul>
                    <li><a href="index.php" class="active">Survey</a></li>
                    <li><a href="results.php">Results</a></li>
                </ul>
            </nav>
        </header>
        
        <main>
            <div class="card">
                <h2>Submit Your Evaluation</h2>
                <form action="submit.php" method="post">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="rating">How do you rate this course?</label>
                        <select name="rating" id="rating" required>
                            <option value="">-- Select Rating --</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Very Good">Very Good</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="btn">Submit Evaluation</button>
                </form>
            </div>
        </main>
        
        <footer>
            <p>&copy; <?php echo date("Y"); ?> Course Survey System</p>
        </footer>
    </div>
</body>
</html>
