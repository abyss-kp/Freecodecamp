function convertHTML(str) {
  let mapObj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  return str.replace(/[&<>\"']/g,match=>mapObj[match]);
}

convertHTML("Dolce & Gabbana");
