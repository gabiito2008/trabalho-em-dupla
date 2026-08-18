const unidadesMedidas = [
  { label: 'Metros (m)', value: 'm' },
  { label: 'Quilômetros (km)', value: 'km' },
  { label: 'Centímetros (cm)', value: 'cm' },
  { label: 'Milhas (mi)', value: 'mi' },
  { label: 'Polegadas (in)', value: 'in' }
];

function paraMetros(valor, unidade) {
  switch (unidade) {
    case 'km': return valor * 1000;
    case 'cm': return valor / 100;
    case 'mi': return valor * 1609.34;
    case 'in': return valor * 0.0254;
    default: return valor;
  }
}

function deMetros(metros, unidadeFinal) {
  switch (unidadeFinal) {
    case 'km': return metros / 1000;
    case 'cm': return metros * 100;
    case 'mi': return metros / 1609.34;
    case 'in': return metros / 0.0254;
    default: return metros;
  }
}

function converterMedidas(valor, de, para) {
  const emMetros = paraMetros(valor, de);
  return deMetros(emMetros, para);
}