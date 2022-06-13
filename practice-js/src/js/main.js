import Controller from "./controllers/book.js";
import Model from "./models/book.js";
import View from "./views/book.js";

const controller = new Controller(new Model(), new View())

controller.init()
