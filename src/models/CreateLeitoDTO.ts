export default interface ICreateLeitoDTO {
    pacient_id: string | undefined;
	unidade: string;
	andar: string;
  	setor: string;
  	ala: string;
	covid_19: string;
	tipo_estadia: string;
	tipo_leito: string;
	quantidade: Number;
}