#! /bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const hlq = config.get('settings.hlq');
const uploads = config.get('uploads');
Object.keys(uploads).forEach((key) => {
    const dir = `./zossrc/${key}`;
    const files = fs_1.readdirSync(dir);
    files.forEach((file) => {
        const fileWOutExtension = path_1.basename(file, path_1.extname(file));
        const cmd = `zowe files upload ftds ` +
            `"${dir}/${file}" ` +
            `"${hlq}.${uploads[key]}(${fileWOutExtension})"`;
        console.log(cmd);
        child_process_1.exec(cmd, (err, stdout, stderr) => {
            if (err)
                console.log(err);
            if (stdout)
                console.log(stdout.toString());
            if (stderr)
                console.log(stderr.toString());
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlDQUFpQztBQUNqQyxpREFBcUM7QUFDckMsMkJBQWlDO0FBQ2pDLCtCQUF5QztBQUd6QyxNQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsR0FBRyxDQUFTLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sT0FBTyxHQUFZLE1BQU0sQ0FBQyxHQUFHLENBQVUsU0FBUyxDQUFDLENBQUM7QUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNqQyxNQUFNLEdBQUcsR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzlCLE1BQU0sS0FBSyxHQUFHLGdCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3BCLE1BQU0saUJBQWlCLEdBQUcsZUFBUSxDQUFDLElBQUksRUFBRSxjQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLEdBQUcsR0FBRyx5QkFBeUI7WUFDakMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO1lBQ25CLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxpQkFBaUIsSUFBSSxDQUFBO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsb0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlCLElBQUksR0FBRztnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLElBQUksTUFBTTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLElBQUksTUFBTTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9