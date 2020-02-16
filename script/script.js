$(document).ready(function(){
  $.get(
    'http://data.fixer.io/api/latest',
  {'access_key': 'c4fda89155e1f51584afb20a8bf7470c'},
    function(response){
      console.log(response);
      console.log(response.rates.RUB);
      console.log(response.rates.USD);
      let rub = response.rates.RUB;
      let eurUsd = response.rates.USD;
      let usdRub = rub / eurUsd;
      $('.EUR').text(response.rates.RUB.toFixed(2));
      $('.USD').text(usdRub.toFixed(2));
     
  });

  $('html').on('click', '.scrollButton', function(event) {
    event.preventDefault();
    if ('body')
    // $('body').css('overflow', 'hidden');
    $('body').toggleClass('scrollOff');
  });
  
});