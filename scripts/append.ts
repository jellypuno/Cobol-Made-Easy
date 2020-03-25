#! /bin/env node
import * as config from "config";
import * as mustache from "mustache";
import * as fs from "fs";

/* Append all 3 Cobol Parts into 1*/
const template = fs.readFileSync("./src/templates/initialize.cbl").toString();

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.writeFileSync("./build/source.cbl", template);
console.log('Created COBOL Template')

const process = fs.readFileSync("./src/templates/process.cbl").toString();
fs.appendFile("./build/source.cbl", process, function (err) {
    if (err) throw err;
    console.log('Added Process');
});

const closing= fs.readFileSync("./src/templates/closing.cbl").toString();
fs.appendFile("./build/source.cbl", closing, function (err) {
    if (err) throw err;
    console.log('Added Closing')
});