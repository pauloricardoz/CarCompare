function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export function apiMarca(tipo) {
  if (tipo !== 'carros' && tipo !== 'motos' && tipo !== 'caminhoes') {
    tipo = 'carros'
  }
  return fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas`)
    .then(handleErrors)
    .then(e => e.json())
    .catch(error => console.log(error));
};

export function apiModelos(tipo = 'carros', marca) {
  if (!marca || marca === '') {
    return [];
  }
  return fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos`)
    .then(handleErrors)
    .then(e => e.json())
    .catch(error => console.log(error));
};

export function apiAnos(tipo = 'carros', marca, modelo) {
  if (!modelo || modelo === '') {
    return [];
  }
  return fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos/${modelo}/anos`)
    .then(handleErrors)
    .then(e => e.json())
    .catch(error => console.log(error));
};

export function apiValor(tipo = 'carros', marca, modelo, ano) {
  if (!ano || ano === '') {
    return [];
  }
  return fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`)
    .then(handleErrors)
    .then(e => e.json())
    .catch(error => console.log(error));
};
