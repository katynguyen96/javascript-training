import Controller from "./controllers/book.js";
import Model from "./models/book.js";
import View from "./views/book.js";

const model = new Model(),
    view = new View(model);

const app = new Controller(model, view);
