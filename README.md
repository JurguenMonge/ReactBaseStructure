# REACT BASE STRUCTURE

React base, how to organize files and folders, as well as making requests with React Query and Axios.

## Table of Contents
- [Explanation](#explanation)
- [Installation](#installation)
- [Author](#author)
- [License](#license)


### Explanation
This is a base React project designed to maintain an organized structure for folders and files, as well as proper management of API requests using the React Query library.

Explanation of the folders:

- **public**  
  This folder contains images/logos of the app. Unlike `src`, this folder is not processed by Webpack.

- **src**  
  Contains the source code of the app. This folder is packaged using Vite to wrap our code.

- **components**  
  All reusable components that can be used in different views or pages.

- **context**  
  Manages global state, allowing multiple components to access it.

- **hooks**  
  Contains reusable logic for different components.

- **layout**  
  Includes everything related to the header, layout, and footer of the entire application.

- **lib**  
  Configuration for Axios to handle API requests.

- **routes**  
  Manages public and private routes based on whether the user is authenticated.

- **service**  
  JavaScript files responsible for making requests to the API endpoints.

- **utils**  
  Contains logic necessary for exporting PDFs, formatting currencies, etc.

- **views**  
  Represents the views or pages of the app.

### Installation

In the `package.json`, you can see the previously installed dependencies. To install them and run the project, use the following commands:

Install all dependencies
```bash
npm install
```

Run project
```bash
npm run dev
```

Delete dependencie
```bash
npm uninstall [name-dependencie]
```

### Author
[Jurguen Monge](https://github.com/JurguenMonge)

Visit my [hook](https://www.npmjs.com/package/use-idle-timer) and add your project

## License
This project is licensed under the MIT License. See the LICENSE file for more details.