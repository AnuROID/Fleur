import { useEffect, useState } from "react";
import "./Clients.css";

import client1 from "../../../assets/clients/client-1.png";
import client2 from "../../../assets/clients/client-2.png";
import client3 from "../../../assets/clients/client-3.png";
import client4 from "../../../assets/clients/client-4.png";
import client7 from "../../../assets/clients/client-7.png";

const clients = [
  client1,
  client2,
  client3,
  client4,
  client7,
];

function Clients() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((current) => {
        return (current + 2) % clients.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const visibleClients = [
    clients[startIndex],
    clients[(startIndex + 1) % clients.length],
  ];

  return (
    <section className="clients-section">

      {/* HEADER */}
      <div className="clients-header">

        <h2>OUR CLIENTS</h2>

        <div className="clients-decoration">
          <span></span>
          <b>◆</b>
          <span></span>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetuer gravida nibh
          vel velit auctor aliquet. Aenean sollicitudin, lorem
          quis bibendum auci elit consequat ipsutis sem niuis
          sed odio sit amet nibh
        </p>

      </div>


      {/* DESKTOP - 5 LOGOS */}
      <div className="clients-logos clients-desktop">

        {clients.map((client, index) => (
          <div className="client-logo" key={index}>
            <img
              src={client}
              alt={`Client ${index + 1}`}
            />
          </div>
        ))}

      </div>


      {/* TABLET / MOBILE - 2 LOGOS */}
      <div className="clients-logos clients-mobile">

        {visibleClients.map((client, index) => (
          <div
            className="client-logo client-change"
            key={`${startIndex}-${index}`}
          >
            <img
              src={client}
              alt={`Client ${startIndex + index + 1}`}
            />
          </div>
        ))}

      </div>

    </section>
  );
}

export default Clients;