$(document).ready(function(){
    $('#divListagem').hide()    

	$('#btnListar,#btnCadastrar').click(function(){
		$('#divListagem, #divCadastro').toggle()
    })


	//UPDATE Tabela 
    function updateTable(data){
    	let linha = ''
    	data.forEach(item => linha += '<td>' + item.value + '</td>')

    	if($('table > tbody > tr > td').length === 1)//se tem apenas uma TD, é a default
       		$('table > tbody').empty()

   		$('table > tbody').append('<tr>' + linha + '<td><input type="button" value="X" /></td></tr>')
		$('#divListagem,#divCadastro').toggle()
	}

	//ENVIAR formulario
    $('form').submit(function(event){
        const data = $(this).serializeArray()
        
        updateDatabase(data,updateTable(data))
        
        event.preventDefault()
    })

    //POST assincrono para webapi
    const webApiDomain = 'http://localhost:3000'

	function updateDatabase(data, callback){
	    const json = {}
	    data.forEach(item => json[item['name']] = item['value'])

	    $.post(webApiDomain + '/clientes', json, function(data){
	        alert('Cliente cadastrado com sucesso!')
	        callback(data)
    	})
	}

})