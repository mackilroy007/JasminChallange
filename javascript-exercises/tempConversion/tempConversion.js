const ftoc = function (temp) {
  /* (32°F − 32) × 5/9 = 0°C */
  return Math.round(((temp - 32) * 5 / 9) * 10) / 10;
}

const ctof = function (temp) {
  /* (0°C × 9/5) + 32 = 32°F */
  return Math.round(((temp * 9 / 5) + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
