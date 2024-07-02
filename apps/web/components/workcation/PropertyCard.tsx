import Image from "next/image";
import React, { SetStateAction } from "react";

import { PropertyLocationType } from "./locations";

type PropertyCardProps = {
  formatter: SetStateAction<any>;
  property: PropertyLocationType["properties"];
};

const PropertyCard: React.FC<PropertyCardProps> = ({ formatter, property }) => {
  const formattedPrice = formatter.format(property.price / 1000);

  return <div></div>;
};

export default PropertyCard;
