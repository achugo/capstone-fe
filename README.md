### Capstone Frontend Application

Welcome to the documentation for the **client** frontend of your project. This document will guide you through the installation process, cloning the repository, creating a branch, and provide an overview of the different tools used in the frontend development.

## Table of Contents



- [Branches](#creating-a-branch)
- [Tools Used](#tools-used)
- [Project Structure](#project-structure)
- [Contributors](#contributors)

  - [TypeScript](#typescript)
  - [HTML](#html)
  - [CSS](#css)
  - [Vite](#vite)
  - [JavaScript](#javascript)
  

---




## Branches
Before you start making changes to the project, it's a good practice to create a branch for your work. This helps keep your changes isolated and organized. To create a new branch, use the following git command:
    
1. Create a new branch and switch to it
    ```bash
    git checkout -b new-branch-name



2. List all branches (with the current branch marked with *)
    ```bash
    git branch

3. Switch to an existing branch
    ```bash
    git checkout branch-name
    
4. Create and switch to a new branch in one step
    ```bash
    git checkout -b new-branch-name

# Tools Used
The client frontend uses a variety of tools and technologies to facilitate development. Here's an overview of the main tools used:

# TypeScript
TypeScript is a statically typed superset of JavaScript that enhances code quality and developer productivity by catching type-related errors at compile time.

## HTML
HTML (Hypertext Markup Language) is the standard markup language used to create web pages. It defines the structure and content of web documents.

# CSS
CSS (Cascading Style Sheets) is used for styling web pages. It allows you to define the layout, colors, fonts, and other visual aspects of your web application.

# Vite
Vite is a fast build tool and development server for modern web development. It provides features like hot module replacement (HMR) and optimized build performance.

# JavaScript
JavaScript is a widely-used programming language that enables dynamic, interactive behavior on web pages. It's essential for client-side scripting and creating dynamic web applications.

# Project Structure
```
├── src/                  # Source code
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── components/       # Reusable UI components
│   ├── containers/       # Reusable UI containers
│   ├── data/             # Data classes & interfaces
│   ├── pages/            # Application pages or views
│   ├── mocks/            # Mock data for testing & demonstrating
│   ├── styles/           # CSS or stylesheets
│   ├── svg/              # SVG files
│   └── App.js            # Root component
├── public/               # Public files (favicon, index.html, etc.)
├── cypress/              # Fixtures, configuration files
├── cypress.config.ts     # Cypress config file for end-to-end testing
├── index.html            # Index file
├── next.config.js        # Next.js react framework config file 
├── package.json          # Node.js package file
├── postcss.config.js     # PostCSS config file
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS config file
├── tsconfig.json         # Config file to specify TypeScript settings and options
├── tsconfig.node.json    # Compiler options for ESNext module
├── vite.config.ts        # Vite configuration
```
# Contributors

1. Achugo, Chukwuemeka Ugonna
2. Pireva, Fortan
3. Kpodji, Emmanuel Kwasi
4. Boudai, Yahia
5. Ndiaye, Ibrahima
6. Yakubov, Kuvonchbek
