function confirmar() {
    const idade = parseInt(document.getElementById('idade').value);
    let resultado = '';
    let imagem = '';
  
    if (isNaN(idade) || idade <= 0) {
      alert('Por favor, insira uma idade.');
      return; // Para a execução da função se a idade não for válida
    }
    else if (idade >= 0 && idade <= 2) {
      resultado = 'Bebé';
      imagem = 'bebe.png';
    } else if (idade > 2 && idade < 12) {
      resultado = 'Criança';
      imagem = 'criança.png';
    } else if (idade >= 12 && idade <= 16) {
      resultado = 'Adolescente';
      imagem = 'adolescente.png';
    } else if (idade > 16 && idade < 18) {
      resultado = 'Jovem Adulto';
      imagem = 'jovem adulto.png';
    } else if (idade >= 18 && idade < 50) {
      resultado = 'Adulto';
      imagem = 'adulto.png';
    } else if (idade >= 50 && idade <= 65) {
      resultado = 'Adulto de Meia Idade';
      imagem = 'Adulto de Meia-idade.png';
    } else if (idade > 65 && idade < 100) {
      resultado = 'Idoso';
      imagem = 'Idoso.png';
    } else if (idade >= 100 && idade <= 130) {
      resultado = 'Lendário';
      imagem = 'lendario.png';
    } else if (idade > 130) {
      resultado = 'Imortal';
      imagem = 'imortal.png';
    }
  
    document.getElementById('resultado').innerText = `Faixa Etária: ${resultado}`;
    document.getElementById('imagem').src = imagem;
  }