"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tareas_1 = require("../models/tareas");
var router = (0, express_1.Router)();
// crear una tarea
router.post("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, completed, nuevaTarea, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, description = _a.description, completed = _a.completed;
                return [4 /*yield*/, tareas_1.Tarea.create({ title: title, description: description, completed: completed })];
            case 1:
                nuevaTarea = _b.sent();
                return [2 /*return*/, res.status(201).json(nuevaTarea)];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).json({ message: "server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// obtener todas las tareas 
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tareas, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, tareas_1.Tarea.findAll()];
            case 1:
                tareas = _a.sent();
                res.json(tareas);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// obtener una tarea por id
router.get("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tarea, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, tareas_1.Tarea.findByPk(req.params.id)];
            case 1:
                tarea = _a.sent();
                if (tarea) {
                    res.json(tarea);
                }
                else {
                    res.status(404).json({ message: "Tarea no encontrada" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// actualizar una tarea
router.put("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tarea, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, tareas_1.Tarea.findByPk(req.params.id)];
            case 1:
                tarea = _a.sent();
                if (!tarea) return [3 /*break*/, 3];
                tarea.title = req.body.title || tarea.title;
                tarea.description = req.body.description || tarea.description;
                tarea.completed = req.body.completed || tarea.completed;
                return [4 /*yield*/, tarea.save()];
            case 2:
                _a.sent();
                res.json(tarea);
                return [3 /*break*/, 4];
            case 3: return [2 /*return*/, res.status(404).json({ message: "Tarea no encontrada" })];
            case 4: return [3 /*break*/, 6];
            case 5:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// eliminar una tarea
router.delete("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tarea, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, tareas_1.Tarea.findByPk(req.params.id)];
            case 1:
                tarea = _a.sent();
                if (!tarea) return [3 /*break*/, 3];
                return [4 /*yield*/, tarea.destroy()];
            case 2:
                _a.sent();
                res.json({ message: "Tarea eliminada" });
                return [3 /*break*/, 4];
            case 3:
                res.status(404).json({ message: "Tarea no encontrada" });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                console.error(error_5);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
