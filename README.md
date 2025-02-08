<a name="readme-top"></a>

<div align="center">

  <h3><b>React Firebase Authentication</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [React Firebase Authenticaton] <a name="about-project"></a>


**[React Firebase Authentication]** This project implements user authentication using Firebase in a React app. It includes features like email/password signup, login, Google authentication, and secure access control. Firebase handles authentication, while React manages the UI and routing. As far as I donot add email verification, password reset, and other features.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://code.visualstudio.com/">Vs Code</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://git-scm.com/">Git</a></li>
     </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.netlify.com">Netlify</a></li>
    <li><a href="https://github.com">Github</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://firebase.google.com/">Firebase</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Email & Password Login]**
- **[Third-Party Login Google]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://react-firebase-auth-v1.netlify.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- visual studio code
- node.js 
- react.js
- firebase account
- netlify account if you want to host
- npm package manager
- git

### Setup

Clone this repository to your desired folder:

Example commands:

```sh
  cd my-folder
  git clone https://github.com/em-usman/react-firebase.git
```
-

### Install

Install this project with:

Example command:

```sh
  cd my-project
  npm install
  npm install firebase
```
-

### Usage

To run the project, execute the following command:


Example command:

```sh
   npm run dev
```
-

### Deployment

You can deploy this project using:

- Firebase Hosting
- Netlify
- Vercel
- Github

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Muhammad Usman Tariq**

- GitHub: [github](https://github.com/em-usman?tab=overview&from=2025-02-01&to=2025-02-08)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/osman-tariq-8a7543266/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **[OTP Verification]**: Add OTP verification for user registration and login.
- **[Link Google Account to Email/Password]**
- **[Verification of email]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/em-usman/react-firebase/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project then support me by giving feedback, star and share with you friends.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank my instructor Umair Hamza. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **[Why am I getting a Firebase `auth/unauthorized-domain` error?]**

  - [This happens if your deployed website domain is not added to Firebase. To fix this:  
- Go to **Firebase Console** → **Your Project** → **Authentication** → **Setting**  
- Under "Authorized Domains," add your Netlify domain (e.g., `yourproject.netlify.app`).]

- **[Why can't I log in with my email after signing up with Google? ]**

  - [If you signed up using third party authentication like (Google authentication), your account is linked to Google Sign-In, and you won’t be able to log in by manually entering your email and password. To access your account, always use the "Login with Google" button. ]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
