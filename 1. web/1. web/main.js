$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    document.querySelector("#circuit").addEventListener("change",function (o) {
      switch (o.target.value) {
        case 'ITA':
          let img= documment.querySelector("circuitimage").src;
          img.src= "./monza.jpg"
          $('#circuitimage').attr('src', './monza.jpg');
         /* $('#f1sound')[0].play();*/
          break;
        case 'HUN':
          $('#circuitimage').attr('src', './img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', './img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', './img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }

//---------------------------------------------------------

function calculate() {
    
}

showCircuit();
