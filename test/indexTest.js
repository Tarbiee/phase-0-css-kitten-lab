const fs = require("fs");
const path = require("path");
const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

const cssFile = fs.readFileSync(
  path.resolve(__dirname, "../css/place-kitty.css"),
  "utf-8"
);
exports.cssFile = cssFile;

function findRule(rules, cssSelector) {
  return rules.find((r) => r.selectorText === cssSelector);
}
exports.findRule = findRule;


