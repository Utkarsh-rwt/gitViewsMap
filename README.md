# GitViewsMap

GitViewsMap is a dynamic SVG badge that can be added to your GitHub profile README to track profile views and visualize visitor locations on an interactive map.

Simply add the following snippet to your GitHub profile README:

```html
<a href="https://gitviewsmap.onrender.com/YOUR_GITHUB_USERNAME">
  <img src="https://gitviewsmap.onrender.com/badge/YOUR_GITHUB_USERNAME.svg" alt="GitViewsMap Visitor Badge" />
</a>
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

The badge will display your profile view count. Clicking on the badge opens your personal visitor map showing the approximate locations of visitors who have viewed your profile.

The project is already deployed and ready to use.

---

## How It Works



When the badge is loaded in a GitHub README using:

```html
<img src="https://gitviewsmap.onrender.com/badge/YOUR_GITHUB_USERNAME.svg" alt="GitViewsMap Visitor Badge">
```

GitHub requests the SVG from the server. The server receives this request and increments the profile view count. To ensure that each badge load results in a fresh request, the response is served with cache-control headers that disable caching. This prevents browsers and intermediaries from reusing stale copies of the badge and allows the view counter to update correctly.

However, because GitHub proxies image requests, the actual visitor's IP address is not available to the server. As a result, visitor locations cannot be collected from badge loads alone.

To collect location data, the badge links to the visitor map page. When a visitor clicks the badge, their browser is redirected directly to the map page. Since this request comes directly from the visitor rather than through GitHub's image proxy, the server can access the visitor's public IP address and estimate their geographic location, which is then displayed on the map.



---
## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</p>

---

## API Endpoints

Generate badge:

```http
GET /badge/:username.svg
```

Get all visitors locations:

```http
GET /map/:username
```

Open visitor map:

```http
GET /:username
```

---

## Limitations

Visitor locations are approximate and depend on public IP geolocation accuracy , as one cannot acces private ip due to browser restrication for obvious reasons.
The project is intended for analytics and visualization purposes rather than precise location tracking.

---

## Contributing

Issues, bug reports, feature suggestions, and pull requests are welcome.
