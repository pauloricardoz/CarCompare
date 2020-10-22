export function updateState(event, stateFunc, option) {
  console.log('event',event.target.value)
  console.log('option',option)
  let codigo = option.find(opt => opt.nome === event.target.value)
  if (codigo) codigo = codigo.codigo
  stateFunc((state) => ({ ...state, value: event.target.value, codigo }));
}
