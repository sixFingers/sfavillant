(function() {
  function.prototype.style = function {
    return this.toString().
        replace(/^[^\/]+\/\*!?/, '').
        replace(/\*\/[^\/]+$/, '');
  }
  
  var stylesheet = function() {
  /*
  #sf_sidebar {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    float: left;
  }
  
  #sf_wrapper {
    display: block;
    padding-left: 200px;
  }
  */
  }

  var content = document.body.innerHTML;
  var wrapper = document.createElement('div');
  wrapper.id = 'sf_wrapper';
  var sidebar = document.createElement('div');
  sidebar.id = 'sf_sidebar';
  document.body.innerHTML = '';
  document.body.appendChild(sidebar);
  document.body.appendChild(wrapper);
  wrapper.innerHTML = content;
}());
