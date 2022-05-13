// A classe quando for instanciada vai criar um objeto, para não ter que repeti-los.

class IndexController {
    constructor() {
        this.input = '';
    }

// Get e Set não são necessariamente obrigatórios, porém importantes para readability

    getInput() {
        return this.input;
    }

    setInput(newValue) {
        this.input = newValue;
    }

// resgata valor do campo de input e atribui o valor através do método setInput

    rescueInput() {
        this.setInput($('#input-field').val());
    }
}