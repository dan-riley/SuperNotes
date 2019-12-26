var SuperNotes = (function() {
  var relationships = {};
  var relation_to = {};

  document.addEventListener('DOMContentLoaded', function(event) {
    inputs = document.getElementsByTagName('input');
    loadPresets();

    var submit = document.getElementById('submit');
    submit.addEventListener('click', function() {
      // Do some stuff with the submitted data!
    });

    var view = document.getElementById('view');
    view.addEventListener('click', function() {
      // Do some stuff with the submitted data!
    });
  });

  function loadPresets() {
    // This should be moved to a JSON or CSV file probably, but here for now for ease
    relationships['parent'] = {
      name: 'Parent',
      number: 1 // Placeholder for other types of info this might need to contain
    }

    relationships['child'] = {
      name: 'Child',
      number: 1 // Placeholder for other types of info this might need to contain
    }

    relationships['sibling'] = {
      name: 'Sibling',
      number: 1 // Placeholder for other types of info this might need to contain
    }

    // These should definitely go in a DB of some kind.  Would really just pull these from 
    // previous note data.  
    relation_to['project1'] = {
      name: 'Project 1',
      number: 1 // Placeholder for other types of info this might need to contain
    }

    relation_to['project2'] = {
      name: 'Project 2',
      number: 1 // Placeholder for other types of info this might need to contain
    }

    relation_to['project3'] = {
      name: 'Project 3',
      number: 1 // Placeholder for other types of info this might need to contain
    }

    var rs = document.getElementById('relationship');
    for (relation in relationships) {
      rs.innerHTML += '<option value="' + relation + '">' + relationships[relation].name + '</option>';
    }

    var rt = document.getElementById('relation_to');
    for (relation in relation_to) {
      rt.innerHTML += '<option value="' + relation + '">' + relation_to[relation].name + '</option>';
    }
  }
})();
