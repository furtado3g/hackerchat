import ComponentsBuilder from "./components.js"

export default class TerminalController {
  constructor() { }

  #onInputReceived(eventEmiter){
    return function(){
      const message = this.getValue()
      console.log(message)
      this.clearValue()
    }
  }

  async initializeTable(eventEmiter) {
    const components = new ComponentsBuilder()
      .setScreen({ title: 'Terminal Chat' })
      .setLayoutComponent()
      .setInputComponent(this.#onInputReceived(eventEmiter))
      .build()
    components.input.focus()
    components.screen.render()
  }
}
