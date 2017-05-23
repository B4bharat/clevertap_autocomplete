$(document).ready(function() {
  //Dummy array of strings containing names of UFC Fighters
  let ufcFighters = [
    'Conor McGregor',
    'Khabib Nurmagomedov',
    'Tony Ferguson',
    'Eddie Alvarez',
    'Nate Diaz',
    'Nick Diaz',
    'Michael Bisping',
    'Goerges St-Pierre',
    'Yoel Romero',
    'Robert Whittakar',
    'Gegard Mussasi',
    'Luke Rockhold',
    'Chris Weidman',
    'Jacare Souza',
    'Kelvin Gastelum',
    'Anderson Silva',
    'Daniel Cormier',
    'Jon Jones',
    'Alexender Gustaffson',
    'Jimmi Manuwa',
    'Stipe Miocic',
    'Junior Dos Santos',
    'Fabricio Werdum',
    'Cain Valazquez',
    'Mark Hunt'
  ];

  $('#search-box').autocomplete({
    lookup: ufcFighters
  });
});