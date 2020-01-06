window.onload = function () {
// init Isotope
var $grid = $('#grid').isotope({
  originLeft: false,
  layoutMode: 'fitRows',
  fitRows: {
    gutter: 10
  }
  // options
});
var $output = $('#output');
var $checkboxes = $('#form-ui input');
// filter items on button click
$checkboxes.change( function() {
  var inclusives = [];
  var inclusivesLabel = [];
  $checkboxes.each( function(i,elm){
    if (elm.checked) {
      inclusives.push (elm.value);
      inclusivesLabel.push (elm.name);
    }
  });
  var filterValue = inclusives.length ? inclusives.join(', ') : '*';
  var filterLabel = inclusivesLabel.length ? inclusivesLabel.join('، ') : 'همه';
  $output.text(filterLabel);
  $grid.isotope({ filter: filterValue });
});
};
