function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('Verifique os dados e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute('src', 'FotoCriançaM.png')
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', 'FotoJovemM.png')
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'FotoAdultoM.png')
      } else if (
        //idoso
        img.setAttribute('src', 'FotoIdosoM.png')
      ) {
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'FotoCriançaF.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'FotoJovemF.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'FotoAdultoF.png')
      } else if (
        //idoso
        img.setAttribute('src', 'FotoIdosoF.png')
      ) {
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
