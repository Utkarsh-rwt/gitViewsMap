const map = L.map("map").setView([20, 0], 2);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "&copy; OpenStreetMap contributors",
  }
).addTo(map);

const username = window.location.pathname.slice(1);

async function loadMap() {
  try {
    const response = await fetch(
      `http://localhost:5000/api/map/${username}`
    );

    const visitors = await response.json();

    const bounds = [];

    visitors.forEach((visitor) => {
      const point = [
        visitor.latitude,
        visitor.longitude,
      ];

      L.marker(point).addTo(map);

      bounds.push(point);
    });

    if (bounds.length > 0) {
      map.fitBounds(bounds);
    }
  } catch (error) {
    console.error(error);
  }
}

loadMap();