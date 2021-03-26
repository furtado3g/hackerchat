import TerminalController from "./src/terminalController.js";
import Events from 'events'

const componentEmiter = new Events()

const controller = new TerminalController()
await controller.initializeTable(componentEmiter)
