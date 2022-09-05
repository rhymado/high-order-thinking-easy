function maximumDistanceToStation(
  cityCount: number,
  stationLocation: number[]
): number {
  const distanceToNearestStation: number[] = [];
  const cityIndex = [...Array(cityCount)];
  cityIndex.forEach((_, idx) => {
    const eachCityToStation: number[] = [];
    stationLocation.forEach((location) => {
      eachCityToStation.push(Math.abs(idx - location));
    });
    distanceToNearestStation.push(Math.min(...eachCityToStation));
  });
  const maximumDistance = Math.max(...distanceToNearestStation);
  return maximumDistance;
}

console.log(maximumDistanceToStation(5, [0, 4]));
console.log(maximumDistanceToStation(6, [0, 1, 2, 3, 4, 5]));
