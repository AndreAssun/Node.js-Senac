<<<<<<< HEAD
class Carro{
    constructor(cor, marca, modelo, ano, velocidade){
        this.cor = cor
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = 0;
        this.ligado = false;
    }


    ligar(){
        console.log("Carro ligado")
        this.ligado = ture
    }

    desligar(){
    console.log("Carro desligado")
    }

    acelerar(){
        if(this.ligado){
            this.velocidade += 5;
            console.log(`A velocidade atual do carro é ${this.velocidade}`)
        } else{
            console.log("Ligue o carro")
        }
    }



    
}

//codigo principal
let carro1 = new Carro("Ciano", "Mercedez", "GLA", 2024)
let carro2 = new Carro("Vermelho", "Chevrolet", "Meriva", 1993)
let carro3 = new Carro("Azul", "Gol", "CL 1.6", 1995)


carro1.ligar()
carro1.acelerar()
carro1.acelerar()
carro1.desligar()
=======
class Carro{
    constructor(cor, marca, modelo, ano, velocidade){
        this.cor = cor
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = 0;
        this.ligado = false;
    }


    ligar(){
        console.log("Carro ligado")
        this.ligado = ture
    }

    desligar(){
    console.log("Carro desligado")
    }

    acelerar(){
        if(this.ligado){
            this.velocidade += 5;
            console.log(`A velocidade atual do carro é ${this.velocidade}`)
        } else{
            console.log("Ligue o carro")
        }
    }



    
}

//codigo principal
let carro1 = new Carro("Ciano", "Mercedez", "GLA", 2024)
let carro2 = new Carro("Vermelho", "Chevrolet", "Meriva", 1993)
let carro3 = new Carro("Azul", "Gol", "CL 1.6", 1995)


carro1.ligar()
carro1.acelerar()
carro1.acelerar()
carro1.desligar()
>>>>>>> a72af077e88ffc736b47820e54a8c82f93e5967f
