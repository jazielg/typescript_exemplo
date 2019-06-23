class Pessoa {

    private _title:Element;
    private _texto:HTMLInputElement;

    constructor(private _nome:string, private _idade:number) {
        this._title = <Element>document.querySelector('h1');
        this._texto = <HTMLInputElement>document.querySelector('#texto');
    }

    get nome() {
        return this._nome;
    }

    get htmlElements() {
        return this._title.textContent + ' ' + this._texto.value;
    }

}

const pessoa = new Pessoa('Teste', 1)

console.log(pessoa.htmlElements)
