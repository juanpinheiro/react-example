const state = (state = [], action) => {
  switch (action.type) {
    case 'GET_STATES':
    return [...[
      'Acre',
      'Alagoas',
      'Amazonas',
      'Amapá',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rondônia',
      'Rio Grande do Sul',
      'Roraima',
      'Santa Catarina',
      'Sergipe',
      'São Paulo',
      'Tocantins',
    ]];
    default:
      return state;
  }
};

export default state;
