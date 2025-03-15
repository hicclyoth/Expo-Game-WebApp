# Expo Game WebApp

This is a React-based paywall application that requires users to enter a valid code to proceed.

---

## 📥 Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/hicclyoth/Expo-Game-WebApp.git
cd Expo-Game-WebApp
```

### 2️⃣ Install Dependencies

#### **Frontend**

```sh
cd paywall-frontend
npm install
```

#### **Backend**

```sh
cd ../paywall-backend
npm install
npm install -g nodemon
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `paywall-backend` folder and add the following:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=paywall_db
PORT=5000
```

Make sure the database credentials match your local setup.

---

## 🔄 MySQL Setup (Windows)

### 1️⃣ Download and Install MySQL

1. Download MySQL Community Server from [here](https://dev.mysql.com/downloads/installer/).
2. Run the installer and choose **Custom Installation**.
3. Select **MySQL Server** and **MySQL Workbench** (optional, for GUI management).
4. Proceed with the installation.
5. Set a **root password** when prompted. Remember this, as it will be used in the `.env` file.
6. Complete the installation and ensure MySQL is running.

### 2️⃣ Start MySQL Service

1. Open **Windows Services** (`Win + R`, type `services.msc`, press Enter).
2. Find **MySQL80** (or similar) in the list.
3. Right-click and select **Start** if it's not running.

### 3️⃣ Configure MySQL Database

1. Open **Command Prompt** as Administrator.
2. Log into MySQL by running:
   ```sh
   mysql -u root -p
   ```
   Enter your root password when prompted.
3. Create the database and table:
   ```sql
   CREATE DATABASE paywall_db;
   USE paywall_db;
   CREATE TABLE code (
     id INT AUTO_INCREMENT PRIMARY KEY,
     code VARCHAR(255) NOT NULL
   );
   INSERT INTO code (code) VALUES ('1234');  -- Example code
   ```
4. Verify the database:
   ```sql
   SHOW DATABASES;
   SELECT * FROM code;
   ```

---

## 🔄 Running the Application

### 1️⃣ Run the Backend

```sh
cd paywall-backend
nodemon server.js
```

### 2️⃣ Run the Frontend

```sh
cd ../paywall-frontend
npm run dev
```

---

## 🛠 How to Use

1. Open `http://localhost:5173/` in your browser.
2. Enter a code.
3. If correct, you will be redirected. Otherwise, you will see an error message.

---

## 🛠 Troubleshooting

If you encounter errors check the ff:

- `.env` file is correctly configured.
- MySQL is running and the `paywall` database exists.
- Backend is running on port 5000.
- Nodemon is installed globally (`npm install -g nodemon`).
