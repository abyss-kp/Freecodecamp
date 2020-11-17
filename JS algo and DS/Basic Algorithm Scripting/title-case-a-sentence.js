function titleCase(str) {
  return str.split(" ").map(([f,...r])=>f.toUpperCase()+r.join("").toLowerCase()).join(" ");
}

titleCase("I'm a little tea pot");
