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
    const files = (0, fs_1.readdirSync)(dir);
    files.forEach((file) => {
        const fileWOutExtension = (0, path_1.basename)(file, (0, path_1.extname)(file));
        const cmd = `zowe files upload ftds ` +
            `"${dir}/${file}" ` +
            `"${hlq}.${uploads[key]}(${fileWOutExtension})"`;
        console.log(cmd);
        (0, child_process_1.exec)(cmd, (err, stdout, stderr) => {
            if (err)
                console.log(err);
            if (stdout)
                console.log(stdout.toString());
            if (stderr)
                console.log(stderr.toString());
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlDQUFpQztBQUNqQyxpREFBcUM7QUFDckMsMkJBQWlDO0FBQ2pDLCtCQUF5QztBQUd6QyxNQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsR0FBRyxDQUFTLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sT0FBTyxHQUFZLE1BQU0sQ0FBQyxHQUFHLENBQVUsU0FBUyxDQUFDLENBQUM7QUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNqQyxNQUFNLEdBQUcsR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUEsZ0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixLQUFLLENBQUMsT0FBTyxDQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDcEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFBLGVBQVEsRUFBQyxJQUFJLEVBQUUsSUFBQSxjQUFPLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLEdBQUcsR0FBRyx5QkFBeUI7WUFDakMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO1lBQ25CLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxpQkFBaUIsSUFBSSxDQUFBO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBQSxvQkFBSSxFQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDOUIsSUFBSSxHQUFHO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDekIsSUFBSSxNQUFNO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxNQUFNO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=