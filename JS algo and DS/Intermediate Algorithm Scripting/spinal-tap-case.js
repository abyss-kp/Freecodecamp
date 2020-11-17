function spinalCase(str) {
  return str.split(/(?=[A-Z])|\s|\_/g).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
