# USERS React + Vite Application

This project is a React application bootstrapped with [Vite](https://vitejs.dev/) and styled using [Ant Design](https://ant.design) and [styled-components](https://styled-components.com/). It demonstrates a simple user management interface with routing, Redux state management, and API integration.

---

## Project Structure

```
.
├── public/                  # Static assets
│   └── vite.svg
├── src/
│   ├── api/                 # API clients
│   ├── app/                 # Redux store setup
│   ├── components/          # Reusable UI components
│   ├── features/            # Feature modules
│   ├── styles/              # Global styles
│   ├── App.jsx              # Main app component with routing
│   └── main.jsx             # Entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## Features

- **User List**: Fetches and displays a list of users from a remote API with filtering by name.
- **User Details**: View detailed information about a selected user.
- **About Page**: Static information about the application.
- **Routing**: Client-side routing with React Router.
- **State Management**: Global state using Redux Toolkit.
- **Styling**: Ant Design components and custom styles with styled-components.
- **API Integration**: Uses Axios for HTTP requests.

---

## Setup Instructions

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v22 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 2. Install Dependencies

```sh
npm install
```

### 3. Run the Development Server

```sh
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

### 4. Build for Production

```sh
npm run build
```

- The production-ready files will be in the `dist/` directory.

### 5. Preview the Production Build

```sh
npm run preview
```

---

## Linting

To check code quality and style:

```sh
npm run lint
```

---

## API

- The app fetches users from [https://fakestoreapi.com/users](https://fakestoreapi.com/users).

---

## Customization

- **Add new features** in the `src/features/` directory.
- **Add new components** in the `src/components/` directory.
- **Modify global styles** in `src/styles/GlobalStyles.js`.

---

## License

This project is for demonstration purposes.

---

## Contact

For questions or suggestions, please contact
