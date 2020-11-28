// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery.validate

function ToggleText(elem){
  $('#'+elem.id+"p").toggle();
}
function SetFontSize(val){
  $("*").each(function(i,e){e.style.fontSize = val});
}
function SetTableStyle(sty){
  if(sty === 'Plain'){
    $("td").removeClass("bright");
    $("td").addClass("plain");
  }
  else{
    $("td").removeClass("plain");
    $("td").addClass("bright");
  }
}
function ValidateCatForm()
{
    $('#CatForm').validate({
      rules: {
        'cat[name]': {required: true},
        'cat[breed]': {required: true},
        'cat[age]': {
          required: true,
          digits: true,
          range: [0, 40],
        },
        'cat[owner_email]': {
          required: true,
          email: true,
        }
      },
      messages: {
        'cat[name]': {required: "You must enter the cat's name",},
        'cat[breed]': {required: "You must enter the cat's breed",},
        'cat[age]': {
          required: "The cat's age is required",
          digits: "The age should be a whole number of years between 0 and 40",
          range: "The age should be a whole number of years between 0 and 40",
        },
        'cat[owner_email]': {
          required: "The owner email is a required field",
          email: "You must enter a valid email",
        }
      }
    });
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("main_content").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main_content").style.marginLeft = "0";
}

function SetPageStyle(val){
  if(val === 'Normal'){
    $("*").each(function(i,e){e.style.background = "white"});
    $("*").each(function(i,e){e.style.color = "black"});
  }
  else{
    $("*").each(function(i,e){e.style.background = "black"});
    $("*").each(function(i,e){e.style.color = "white"});
  }
}
$(document).ready(function() {
  if(document.getElementById('welcome_id')){
    $('#wfp, #tbp, #gamep').hide();
  }
  if(document.getElementById('CatForm'))
  {
    ValidateCatForm();
  }
  $('[data-js-hide-link]').click(function(event){
    $(this).parents('li').hide();
    event.preventDefault();
  });
});
