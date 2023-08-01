"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 5000;
const mongoURL = "mongodb://mongodb_container:27017/?useNewUrlParser=true";
mongoose_1.default.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello Bhai!");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
