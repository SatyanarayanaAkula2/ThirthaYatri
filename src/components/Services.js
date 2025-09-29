import React from "react";
import "./Services.css";

const services = [
  {
    name: "Temple Services",
    shortDesc: "Get access to temple rituals.",
    fullDesc:
      "Get access to temple rituals, darshan booking, and spiritual guidance. Experience devotion in a seamless way, anytime, anywhere.",
    image: "/temple.webp",
  },
  {
    name: "Accommodation Services",
    shortDesc: "Comfortable stay options.",
    fullDesc:
      "Affordable and comfortable stay options near pilgrimage sites. Clean, safe, and close to major temples for your convenience.",
    image: "/accommodation-services.jpg",
  },
  {
    name: "Medical Services",
    shortDesc: "Healthcare on the go.",
    fullDesc:
      "Emergency medical support, doctors on call, and healthcare facilities to ensure safe travel and peace of mind for all pilgrims.",
    image: "/images.jpeg",
  },
  {
    name: "Multi-Modal Travel Services",
    shortDesc: "Seamless travel solutions.",
    fullDesc:
      "Travel via buses, trains, and cabs with one click. Our multi-modal solutions provide affordable, hassle-free journeys for devotees.",
    image: "/travel.jpeg",
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
              <p className="service-short">{service.shortDesc}</p>
              <p className="service-full">
                {service.fullDesc}{" "}
                <Link
                  to={`/services/${encodeURIComponent(service.name)}`}
                  className="know-more-link"
                >
                  Know More
                </Link>
              </p>
              <p>{service.shortDesc}</p>
              {/* <Link
                to={`/services/${encodeURIComponent(service.name)}`}
                className="know-more-link"
              >
                Know More
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
