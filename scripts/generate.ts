#! /bin/env node
import * as config from "config";
import * as mustache from "mustache";
import * as fs from "fs";

/* Render Compiler.JCL */
const compiler = fs.readFileSync("./src/cntl/compiler_template.txt").toString();
const rendered_compiler = mustache.render(compiler, config);

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.writeFileSync("./build/compiler.jcl", rendered_compiler);
console.log("Generated custom JCL to ./build/compiler.jcl");

/* Render Source Program Part 1*/
const source = fs.readFileSync("./src/source/helowrld.txt").toString();
const rendered_source = mustache.render(source, config);

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.writeFileSync("./build/source.cbl", rendered_source);
console.log("Generated COBOL pgm to ./build/source.cbl");

/* Render Run JCL*/
const runjob = fs.readFileSync("./src/cntl/helotst.txt").toString();
const rendered_runjob = mustache.render(runjob, config);

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.writeFileSync("./build/runjob.jcl", rendered_runjob);
console.log("Generated run job to ./build/runjob.jcl");