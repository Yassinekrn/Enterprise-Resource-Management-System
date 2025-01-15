# Enterprise Resource Management System (ERM)

A web-based solution for managing internal resources and materials efficiently, developed using **Angular**, **.NET Core (C#)**, and **MySQL**. The system provides user authentication, CRUD operations for materials and employees, and features to assign resources to employees.

---

## Features

-   **User Authentication**: Secure login system with test credentials provided.
-   **CRUD Operations**: Manage employees, materials, and assignments efficiently.
-   **Material Assignment**: Assign materials to employees and track resource usage.
-   **Modern UI**: Built with Angular Material for a responsive and user-friendly design.
-   **Scalable Backend**: Built using .NET Core and Entity Framework with a MySQL database for efficient data management.

---

## Technologies Used

### Frontend:

-   **Framework**: Angular
-   **UI Libraries**:
    -   @angular/material
    -   @angular/cdk
    -   ngx-toastr
-   **Reactive Programming**: rxjs
-   **Build Tools**: @angular/cli, TypeScript

### Backend:

-   **Framework**: .NET Core (C#)
-   **Database**: MySQL
-   **ORM**: Entity Framework

---

## Project Structure

### **Repository Layout**:

```
/
|-- frontend/   # Angular frontend project
|-- backend/    # .NET Core backend project
```

## Installation Guide

### Prerequisites

-   **Frontend**:
    -   Node.js
    -   Angular CLI
-   **Backend**:
    -   .NET Core SDK
    -   MySQL Server
-   **Tools**:
    -   Visual Studio for backend development
    -   Visual Studio Code (or any code editor) for frontend development

### Steps to Set Up

#### 1. **Clone the Repository**:

```bash
git clone https://github.com/Yassinekrn/Enterprise-Resource-Management-System.git
cd Enterprise-Resource-Management-System
```

#### 2. **Set Up the Backend**:

1. Navigate to the `backend/` directory:
    ```bash
    cd backend/
    ```
2. Update `appsettings.json` with your database credentials.
3. Run the following commands to restore dependencies and start the server:
    ```bash
    dotnet restore
    dotnet run
    ```

#### 3. **Set Up the Frontend**:

1. Navigate to the `frontend/` directory:
    ```bash
    cd ../frontend/
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    ng serve -o
    ```

#### 4. **Access the Application**:

-   Open your browser and navigate to `http://localhost:4200`.
-   Login credentials:
    -   Username: `test`
    -   Password: `test`

---

## Usage

-   Manage employees and materials using the intuitive web interface.
-   Assign materials to employees and track their usage.

---

## Screenshots (Optional)

Add relevant screenshots of the application UI, login page, dashboard, etc.

---

## Future Enhancements

-   Add role-based authentication for advanced user management.
-   Introduce reporting and analytics for resource usage.
-   Optimize the backend API for better performance.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## License

This project is licensed under the [MIT License](LICENSE).
