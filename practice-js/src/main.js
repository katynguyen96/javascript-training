import Controller from "./controller/controller.js";
import Model from "./models/models.js";
import View from "./views/views.js";

const model = new Model(),
    view = new View(model);

const app = new Controller(model, view);
