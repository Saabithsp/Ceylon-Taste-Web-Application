# Ceylon-Taste-Web-Application

## 🌐 Overview
Ceylon-Taste-Web-Application is a dynamic and responsive web app designed to provide a smooth user experience. Built using HTML, CSS, JavaScript, and PHP, it features a highly interactive interface and robust backend support, ideal for showcasing and interacting with culinary content.

## ✨ Features
- **📱 Responsive Design:** Ensures compatibility across various devices and screen sizes.
- **🖥️ Interactive UI:** JavaScript-driven for dynamic content and seamless user interactions.
- **⚙️ Backend Processing:** PHP handles server-side operations efficiently.
- **🗄️ Database Integration:** Connects to MySQL for effective data management.

## ⚙️ Prerequisites
- **Web Server:** Apache, Nginx, or compatible.
- **PHP:** Version 7.4 or above.
- **Database:** MySQL or similar.
- **Browser:** Latest version of Chrome, Firefox, Safari, or Edge.

## 🚀 Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/Ceylon-Taste-Web-Application.git
   ```

2. **Set Up Web Server:**
   - Ensure your server is active and place the project in the root directory (e.g., `/var/www/html` for Apache).

3. **Configure Database:**
   - Create a database in MySQL and import the provided `.sql` file:
     ```bash
     mysql -u username -p database_name < database.sql
     ```

4. **Update Configurations:**
   - Edit `config.php` with your database details:
     ```php
     <?php
     $host = 'localhost';
     $db = 'database_name';
     $user = 'username';
     $pass = 'password';
     ?>
     ```

5. **Run the App:**
   - Start your web server and access the app at `http://localhost/Ceylon-Taste-Web-Application`.

## 👥 Contributing
1. **Fork** the repository.
2. **Create a branch**: `git checkout -b feature-name`
3. **Commit** changes: `git commit -m 'Add new feature'`
4. **Push** to branch: `git push origin feature-name`
5. **Submit** a pull request.

## 📬 Contact
For inquiries, please reach out to **saabithsp@gmail.com**.
