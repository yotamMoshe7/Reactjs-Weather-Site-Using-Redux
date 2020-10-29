export const addPlace = (places, placeToAdd) => {
  console.log(places);
  const existingPlace = places.find(
    place => place.name === placeToAdd.name
  );

  if(!existingPlace){
    return [...places, placeToAdd]
  }

  else return [...places]
};