class Pessoa {

    private _title:Element;
    private _texto:HTMLInputElement;

    // private _trabalhos:Array<Trabalho>;
    private _trabalhos:Trabalho[] = [];

    constructor(private _nome:string, private _idade:number, trabalho:Trabalho) {
        this._title = <Element>document.querySelector('h1');
        this._texto = <HTMLInputElement>document.querySelector('#texto');

        this._trabalhos.push(trabalho);
    }

    get nome() {
        return this._nome;
    }

    get htmlElements() {
        return this._title.textContent + ' ' + this._texto.value;
    }

    trabalho():Trabalho[] {
        return this._trabalhos;
    }
}

class Trabalho {
    constructor(private _titulo:string, private _salario:number) { }

}

const job = new Trabalho('Padeiro', 1000);
const pessoa = new Pessoa('Teste', 1, job);

function adiciona(event:Event) {
    event.preventDefault();
}

console.log(pessoa.htmlElements)
