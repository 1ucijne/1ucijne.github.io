<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artist Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Helvetica Light', sans-serif;
            color: white;
            background: black;
            overflow: hidden;
        }

        header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 50px;
            z-index: 10;
        }

        .logo {
            font-size: 18px;
            font-weight: lighter;
            letter-spacing: 2px;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 30px;
        }

        nav ul li a {
            text-decoration: none;
            color: white;
            font-size: 14px;
            letter-spacing: 1.5px;
        }

        .social {
            display: flex;
            align-items: center;
        }

        .social img {
            width: 20px;
            height: 20px;
            margin-left: 15px;
        }

        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: left;
            padding: 100px 80px;
            background: url('background.jpg') no-repeat center center/cover;
        }

        .hero-text {
            margin-left: 5%;
        }

        .hero h1 {
            font-size: 72px;
            font-weight: lighter;
            letter-spacing: 3px;
        }

        .hero p {
            font-size: 18px;
            letter-spacing: 5px;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">AP</div>
        <nav>
            <ul>
                <li><a href="#ceramics">Ceramics</a></li>
                <li><a href="#fineart">Fine Art</a></li>
                <li><a href="#artist">Artist</a></li>
            </ul>
        </nav>
        <div class="social">
            <img src="instagram-icon.png" alt="Instagram">
        </div>
    </header>
    <main>
        <section class="hero">
            <div class="hero-text">
                <h1>Lucijne</h1>
                <p>Lucine Sokola</p>
            </div>
        </section>
    </main>
</body>
</html>
