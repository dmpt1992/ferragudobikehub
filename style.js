* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f7f7f7;
  color: #222;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
}

/* HERO */
.hero {
  background: #000;
  color: #fff;
  padding: 100px 20px;
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

/* BUTTON */
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background: #00c853;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}

/* SECTIONS */
section {
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 20px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

/* DARK */
.dark {
  background: #111;
  color: white;
}

.dark .card {
  background: #1c1c1c;
}

/* INFO */
.info {
  background: #fff;
}

.info .container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.info-block {
  flex: 1 1 300px;
}

/* CONTACT */
.contact {
  background: #eee;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 20px;
  background: #000;
  color: #fff;
}
