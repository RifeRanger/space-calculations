
// Newton's second law
const secondLaw = (mass, acceleration) => {
  return mass * acceleration;
}

// Gravitational constant in N*m^2/kg^2
const gravitationalConstant = 6.6743015 * (10**-11);

// Newton's law of universal gravitation
const lawOfUniversalGravitation = (mass1, mass2, distance) => {
  return gravitationalConstant * (mass1 * mass2 / distance);
}

// Newton's law of universal graviation when first mass is excessively greater than the second mass
// Such a situation would exist between a planet and a satellite
const lawOfLargeUniversalGravitation = (mass, distance) => {
  return gravitationalConstant * (mass / distance);
}
