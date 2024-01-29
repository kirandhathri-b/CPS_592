$(document).ready(function() {


  function showTab(tabId) {
    $(".content_tab").hide();
    $("#" + tabId).show();
  }


  showTab("content_dialer");


  $("#Dialpad").click(function() {
    showTab("content_dialer");
  });

  $("#Contacts").click(function() {
    showTab("content_contacts");
  });

  $("#Addcontacts").click(function() {
    showTab("content_addcontact");
  });

  $("#testgestures").click(function() {
    showTab("content_testgestures");
  });


  $("#content_dialer .row1 button, #content_dialer .row2 button, #content_dialer .row3 button, #content_dialer .row4 button").click(function() {
    var num = $(this).text();
    $("#numpad").val($("#numpad").val() + num);
  });


  $("#clear").click(function() {
    $("#numpad").val("");
  });


  $("#dial").click(function() {
    alert("Calling " + $("#numpad").val());
  });

  let downX = 0;
  let downY = 0;
  $("#gestureareaip").mousedown(function(event) {
    downX = event.pageX;
    downY = event.pageY;
  });
  $("#gestureareaip").mouseup(function(event) {
    let upX = event.pageX;
    let upY = event.pageY;

    if (upX < downX){
      $("#gestureop").val("swiped left");
    }
    else if (upX >downX){
      $("#gestureop").val("swiped right");
    }
    //else if (upY > downY){
    //  $("#gestureop").val("swiped down");
    //}
    //else if (upY < downY){
    //  $("#gestureop").val("swiped up");
    //}
  });


});
