export function createMission(data) {
  // Define the mappings
  const frameMapping = {
    Relative: 3,
    Absolute: 0,
    Terrain: 10,
  };

  const commandMapping = {
    "Return to Launch": 20,
    Land: 21,
    Waypoint: 16,
    "Take Off": 22,
  };

  // Create the output array
  let output = ["QGC WPL 110"];

  // Iterate over the data
  data.forEach((item, index) => {
    // Replace the placeholders with the values from the data
    let altitudeValue = item.command === "Land" ? 0 : item.alt;
    let line = `${index} ${index === 0 ? 1 : 0} ${frameMapping[item.frame]} ${
      commandMapping[item.command]
    } ${item.p1} ${item.p2} ${item.p3} ${item.p4} ${item.latitude} ${
      item.longitude
    } ${altitudeValue} 1`;

    // Add the line to the output
    output.push(line);
  });

  // Join the elements of the output with newline characters
  let outputString = output.join("\n");

  return outputString;
}
