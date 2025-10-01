<h1 align="center">Welcome to Zenika OSS 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/zenika-open-source/insights-website/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/zenika-open-source/insights-website/blob/master/LICENSE">
    <img alt="License: Apache 2.0" src="https://img.shields.io/badge/License-Apache 2.0-yellow.svg" target="_blank" />
  </a>
  <a href="https://circleci.com/gh/zenika-open-source/oss.zenika.com/tree/main">
    <img alt="CircleCI" src="https://circleci.com/gh/zenika-open-source/oss.zenika.com/tree/main.svg?style=svg" target="_blank" />
  </a>
  <a href="https://app.netlify.com/sites/zenika-open-source-insights/deploys">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/44effe10-3635-426d-899d-984201fa828a/deploy-status" target="_blank" />
  </a>
</p>

> Website to display awesome insights about organization open source activity

## ✨Homepage

[https://oss.zenika.com](https://oss.zenika.com)

## Zenika Hacktoberfest Leaderboard

⚠️ **You must be part of Zenika company to participate to the leaderboard** ⚠️

Zenika Hacktoberfest Leaderboard: [https://oss.zenika.com/contributors](https://oss.zenika.com/contributors)

To be added to the leaderboard you must add your GitHub username and Zenika location in the `/src/app/hacktoberfest.json/route.ts` file.

**You will need:**

- a [GitHub account](https://github.com) or a [GitLab account](https://gitlab.com/).
- to be registered to [Hacktoberfest website](https://hacktoberfest.digitalocean.com/).
- belongs to Zenika company.

**Then you can make a PR to add your name:**

1. Fork this repository
2. Edit the `/src/app/hacktoberfest.json/route.ts` file by adding your informations to the `hacktoberfestData` array like this :

```
  {
      "name": "your name you want to display on this website",
      "agency": "your-location",
      "github": {
        "handle": "your-github-username"
      },
      "gitlab": {
        "handle": "your-gitlab-username"
      }
    }
```

⚠️ Please copy/paste one of the following location:

- "Bordeaux, FR"
- "Brest, FR"
- "Casablanca, MA"
- "Clermont-Ferrand, FR"
- "Grenoble, FR"
- "Lille, FR"
- "Lyon, FR"
- "Montreal, CA"
- "Nantes, FR"
- "Niort, FR"
- "Paris, FR"
- "Rennes, FR"
- "Singapore, SG"
- "Toulouse, FR"

3. Create the PR.

🎉 So you will have your first PR. Happy Hacktoberfest!

Once reviewed and merged, it may take one hour before the website is updated (cache stuff :)

Zenika Hacktoberfest Leaderboard: [https://oss.zenika.com/hacktoberfest.html](https://oss.zenika.com/hacktoberfest.html)

## 📦 Install

```sh
npm install
```

## 🚀 Usage

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Start production server

```sh
npm run start
```

### Linting and formatting

```sh
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run typecheck
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome. Feel free to check [issues page](https://github.com/zenika-open-source/insights-website/issues) if you want to contribute.

Please see [contribution doc](./docs/CONTRIBUTING.md)

## 👤 Author

**Zenika**

- Twitter: [@ZenikaOSS](https://twitter.com/ZenikaOSS)
- Github: [@zenika-open-source](https://github.com/zenika-open-source)

## 🙏 Show your support

Please ⭐️ this repository if you like it.

## 📝 License

Copyright © 2025 [Zenika](https://github.com/zenika-open-source).

This project is [Apache 2.0](https://github.com/zenika-open-source/insights-website/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

![with love by zenika](https://img.shields.io/badge/With%20%E2%9D%A4%EF%B8%8F%20by-Zenika-b51432.svg?link=https://oss.zenika.com)
