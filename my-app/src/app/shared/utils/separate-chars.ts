export function separateChars(value: string, separator = '-') {
  if (value.length === 0) {
    throw new Error('value must be at least 1 char');
  }

  let result = value[0];

  for (let i = 1; i<value.length; i++) {
    result += separator + value[i];
  }

  return result;
}

// Pure function :
// 1 - prédictive
// appelée avec des params données elle a toujours le même retour
// ex de fonction prédictive :
// sum(1, 2) === 3
// ex de fonction non-prédictive :
// rand(0, 10) === ???
// 2 - pas de side effect
// pas d'appels à des apis externe (réseaux, storage)
// 3 - ne doit pas modifier ses params d'entrée

// separateChars('hello') === h-e-l-l-o
// separateChars('hello') === h-e-l-l-o
// separateChars('hello', '_') === h_e_l_l_o


