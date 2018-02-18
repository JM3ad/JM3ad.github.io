"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../main/main");
var chai_1 = require("chai");
require("mocha");
describe('getClimate function', function () {
    it('should return a string', function () {
        var climate = main_1.getClimate();
        chai_1.expect(climate).to.equal('Hot');
    });
});
