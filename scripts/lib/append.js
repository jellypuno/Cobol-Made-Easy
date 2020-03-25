#! /bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const template = fs.readFileSync("./src/templates/initialize.cbl").toString();
if (!fs.existsSync("./build"))
    fs.mkdirSync("./build");
fs.writeFileSync("./build/source.cbl", template);
console.log('Created COBOL Template');
const process = fs.readFileSync("./src/templates/process.cbl").toString();
fs.appendFile("./build/source.cbl", process, function (err) {
    if (err)
        throw err;
    console.log('Added Process');
});
const closing = fs.readFileSync("./src/templates/closing.cbl").toString();
fs.appendFile("./build/source.cbl", closing, function (err) {
    if (err)
        throw err;
    console.log('Added Closing');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHlCQUF5QjtBQUd6QixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFOUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2RCxFQUFFLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtBQUVyQyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsVUFBVSxHQUFHO0lBQ3RELElBQUksR0FBRztRQUFFLE1BQU0sR0FBRyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLE9BQU8sR0FBRSxFQUFFLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDekUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsVUFBVSxHQUFHO0lBQ3RELElBQUksR0FBRztRQUFFLE1BQU0sR0FBRyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDaEMsQ0FBQyxDQUFDLENBQUMifQ==