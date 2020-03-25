#! /bin/env node
import * as config from "config";
import * as mustache from "mustache";
import * as fs from "fs";

/* Render Compiler.JCL */
const compiler = fs.readFileSync("./src/templates/compiler_template.txt").toString();
const rendered_compiler = mustache.render(compiler, config);

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.writeFileSync("./build/compiler.jcl", rendered_compiler);
console.log("Generated custom JCL to ./build/compiler.jcl");

/* Render Source Program Part 1*/
const source = fs.readFileSync("./build/source.cbl").toString();
const rendered_source = mustache.render(source, config);
if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.writeFileSync("./build/source.cbl", rendered_source);

const source2 = fs.readFileSync("./build/source.cbl").toString();
const rendered_cobol = mustache.render(source2, config);

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.writeFileSync("./build/source.cbl", rendered_cobol);
console.log("Generated COBOL program to ./build/source.cbl");