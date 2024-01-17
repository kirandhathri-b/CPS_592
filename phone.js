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
});
