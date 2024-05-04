function calcularNivel(vitorias, derrotas) {
	let saldoVitorias = vitorias - derrotas;
	let nivel;
	let nome = "Khall Drogo";

	if (saldoVitorias < 10) {
		nivel = "Ferro";
	} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
		nivel = "Bronze";
	} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
		nivel = "Prata";
	} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
		nivel = "Ouro";
	} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
		nivel = "Diamante";
	} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
		nivel = "Lendário";
	} else {
		nivel = "Imortal";
	}
	return {
		saldoVitorias: saldoVitorias,
		nivel: nivel,
		nome: nome,
	};
}

const resultado = calcularNivel(150, 15);
console.log(`O herói ${resultado.nome}, tem saldo de ${resultado.saldoVitorias} e está no nivel de ${resultado.nivel}`);
