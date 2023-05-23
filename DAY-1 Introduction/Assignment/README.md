## DAY 1 : INTRODUCTION

### 1. What is Emmet ?
**Emmet** is a powerful and widely used web development tool that helps you write HTML and CSS code more efficiently. It provides shortcuts and abbreviations, known as **Emmet abbreviations** or snippets, to quickly generate HTML and CSS code with less typing.

Here are some key features and benefits of Emmet:

1. **Abbreviations:** Emmet allows you to write short abbreviations and expand them into complete HTML or CSS code snippets. For example, you can type **ul>li.item*5** and expand it to a list with five list items.
    ![example1-emmet](./assets/emmet-example1.png)
   
##

### 2. Difference between a Library and Framework ?
**Libraries** are collections of reusable code that provide specific functions and components for developers to use as needed. They offer flexibility and allow developers to have more control over their code.

**Frameworks** on the other hand, provide a structured environment for building applications. They enforce specific rules, architecture, and coding conventions. Frameworks control the flow of the application and require developers to work within their predefined structure.

In summary, **libraries** give more control to developers, while **frameworks** provide a ready-made structure and guidelines for development.

## 

### 3. What is CDN ? Why do we use it ?
A **CDN**, or **Content Delivery Network**, is a distributed network of servers located around the world that helps deliver web content, such as images, scripts, stylesheets, and other files, to users more efficiently.

In simpler terms, a **CDN** is like a global network of storage and delivery centers for website files. When you use a **CDN**, your website's files are stored on servers in various locations.

The main use of a **CDN** is to deliver content through a network of servers in a secure and efficient way.

**Note:** For React we have included following **CDN** links:

```sh
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>  // For React
 
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>  // For React DOM
```

## 

### 4. What is crossorigin in script tag ?
When you include a **JavaScript** file in your web page using the **<script>** tag, the browser needs to know if it can trust and execute that file. The **crossorigin** attribute helps in this process.
   
So, basically the **crossorigin** attribute in the **<script>** tag is primarily used for security purposes. It helps browsers enforce security policies when loading and executing JavaScript files from different domains or origins.
   
Here's what it does:

**Same-origin**: By default, when you include a **JavaScript** file from the same domain as your web page, the browser considers it **"same-origin"**, meaning it trusts the file and allows it to be executed without any restrictions.

**Cross-origin**: If you include a **JavaScript** file from a different domain or origin, the browser treats it as **"cross-origin"**, This means the browser may apply security measures to prevent potential security risks, such as accessing sensitive data or modifying the page.   

```sh
<script crossorigin src="..."></script>
```
   
 ##
   
### 5. What is difference between React and ReactDOM ?
In simpler terms, React and ReactDOM are two separate packages in the React library that serve different purposes:

**React**: React is a **JavaScript library** for building **user interfaces**. It provides a set of tools and components that allow developers to create **reusable UI components** and manage the dynamic rendering of those components. React focuses on the **structure and logic** of the user interface, including components, state management, and handling user interactions.

**ReactDOM**: ReactDOM is a specific **package within the React library** that focuses on the **interaction between React and the Document Object Model** (DOM). It provides methods and functionality to render React components to the browser's DOM. ReactDOM is responsible for taking the React components and efficiently updating the actual HTML elements on the web page.

In simple terms, **React** is the brain behind creating and managing UI components, while **ReactDOM** takes care of rendering those components to the web page's DOM so that users can see them in their browsers.
   
##
   
### 6. What is difference between "react.development.js" and "react.production.js" files via CDN ?
**Development** is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   