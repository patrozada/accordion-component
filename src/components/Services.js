import React from 'react';

function Services(props) {
  const {paidServices, freeServices} = props;
  return (
    <React.Fragment>
      <li className="service__title">
        Servicios gratuitos
        <ul className="service__list">
          {freeServices.map(service => (
            <li key={service.serviceId}>
              {service.serviceCaption}
            </li>
          ))}
        </ul>
      </li>
      <li className="service__title">
        Servicios de pago
        <ul className="service__list">
          {paidServices.map(service => (
            <li key={service.serviceId}>
              {service.serviceCaption}
            </li>
          ))}
        </ul>
      </li>
    </React.Fragment>
  )
}

export default Services;