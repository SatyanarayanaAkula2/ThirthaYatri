import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    name: "Temple Services",
    shortDesc: "Get access to temple rituals, darshan booking, and guidance.",
    image:"/temple.webp",
  },
  {
    name: "Accommodation Services",
    shortDesc: "Affordable and comfortable stay options near temples.",
    image:"/accommodation-services.jpg",
  },
  {
    name: "Medical Services",
    shortDesc: "Emergency medical support and healthcare facilities.",
    image:"/images.jpeg",
  },
  {
    name: "Multi-Modal Travel Services",
    shortDesc: "Seamless travel via buses, trains, and cabs.",
    image:"/travel.jpeg",
  },
];

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-box"
            key={index}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="overlay">
              <h2>{service.name}</h2>
              <p>{service.shortDesc}</p>
              <Link
                to={`/services/${encodeURIComponent(service.name)}`}
                className="know-more-link"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
