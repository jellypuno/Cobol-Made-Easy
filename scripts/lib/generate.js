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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9nZW5lcmF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpQ0FBaUM7QUFDakMscUNBQXFDO0FBQ3JDLHlCQUF5QjtBQUd6QixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDaEYsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUU1RCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZELEVBQUUsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7QUFHNUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZFLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRXhELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFHekQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BFLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRXhELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUMifQ==