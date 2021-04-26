import { AlertService } from "./app/alert.service";
import { run } from "./app/app";
import { ComponentService } from "./app/component.service";
import "./index.scss";

var a = 1;
var b = 2;
var c = 3;
var x = { x: 4, y: 5, z: 6 };
const testObj = { a, b, c, ...x };
console.log(testObj);
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
