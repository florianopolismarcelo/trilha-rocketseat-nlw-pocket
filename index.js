const start = () =>{ 
    let count = 1
   while(true) {
    let opcao = "sair"
    switch(opcao) {
        case "cadastrar":
            console.log("Vamos cadastrar")
            break
            case "Listar":
            console.log("Vamos Listar")
            break
            case "Sair":
                return
    }
   }
    
}
start()
