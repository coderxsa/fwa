"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
const consolefy_1 = require("consolefy");
const Functions_1 = require("../Common/Functions");
class CommandHandler {
    constructor(bot, path) {
        this._bot = bot;
        this._path = path;
        this.consolefy = new consolefy_1.Consolefy({ tag: 'command-handler' });
    }
    load(isShowLog = false) {
        var _a, _b;
        if (isShowLog)
            (_a = this.consolefy) === null || _a === void 0 ? void 0 : _a.group("Command Handler Load");
        (0, Functions_1.walk)(this._path, (x) => {
            var _a, _b;
            let cmdObj = require(x);
            if (!cmdObj.type || cmdObj.type === 'command') {
                this._bot.cmd.set(cmdObj.name, cmdObj);
                if (isShowLog)
                    (_a = this.consolefy) === null || _a === void 0 ? void 0 : _a.success(`Loaded Command - ${cmdObj.name}`);
            }
            else if (cmdObj.type === 'hears') {
                this._bot.hearsMap.set(cmdObj.name, cmdObj);
                if (isShowLog)
                    (_b = this.consolefy) === null || _b === void 0 ? void 0 : _b.success(`Loaded Hears - ${cmdObj.name}`);
            }
        });
        if (isShowLog)
            (_b = this.consolefy) === null || _b === void 0 ? void 0 : _b.groupEnd();
    }
}
exports.CommandHandler = CommandHandler;
