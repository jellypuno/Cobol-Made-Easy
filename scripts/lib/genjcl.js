#! /bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const mustache = require("mustache");
const fs = require("fs");
const compiler = fs.readFileSync("./src/cntl/compiler_template.txt").toString();
const rendered_compiler = mustache.render(compiler, config);
if (!fs.existsSync("./build"))
    fs.mkdirSync("./build");
fs.writeFileSync("./build/compiler.jcl", rendered_compiler);
console.log("Generated custom JCL to ./build/compiler.jcl");
const source = fs.readFileSync("./src/source/helowrld.txt").toString();
const rendered_source = mustache.render(source, config);
if (!fs.existsSync("./build"))
    fs.mkdirSync("./build");
fs.writeFileSync("./build/source.cbl", rendered_source);
console.log("Generated COBOL pgm to ./build/source.cbl");
const runjob = fs.readFileSync("./src/cntl/helotst.txt").toString();
const rendered_runjob = mustache.render(runjob, config);
if (!fs.existsSync("./build"))
    fs.mkdirSync("./build");
fs.writeFileSync("./build/runjob.jcl", rendered_runjob);
console.log("Generated run job to ./build/runjob.jcl");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuamNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZ2VuamNsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMseUJBQXlCO0FBR3pCLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoRixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTVELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUc1RCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkUsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFeEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2RCxFQUFFLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUd6RCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEUsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFeEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2RCxFQUFFLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQyJ9