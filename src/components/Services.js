import React from 'react';

function Services(props) {
  const {paidServices, freeServices} = props;
  return (
    <ul>
      <li>
        Servicios gratuitos
        <ul>
          {freeServices.map(service => (
            <li key={service.serviceId}>
              {service.serviceCaption}
            </li>
          ))}
        </ul>
      </li>
      <li>
        Servicios de pago
        <ul>
          {paidServices.map(service => (
            <li key={service.serviceId}>
              {service.serviceCaption}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Services;