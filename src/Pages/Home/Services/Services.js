import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./services.css"

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-60/main/public/services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mt-5 mt-5 pt-5" id="services">
      <h1 className="text-center">Our services</h1>
      <div className="all-services ">
      

          {
            services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
          </div>
        </div>
  );
};

export default Services;
