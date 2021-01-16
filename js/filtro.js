var campoFiltro = document.querySelector('#filtro-tabela')

campoFiltro.addEventListener('input',function () {
    console.log(this.value)

    var paciente = document.querySelectorAll('.paciente')
    for (var i =0; i < paciente.length; i++){
        var paciente = pacientes[i]
        var tdNome = paciente.querySelector('.info-nome')
        var nome = paciente.textContent 
    }
    
})
