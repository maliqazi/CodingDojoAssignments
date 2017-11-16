$(document).ready(function(){

  $( ".addclass" ).click(function() {
    $( ".addred" ).addClass( "red");
  });

  $( ".slidetoggle" ).click(function() {
    $( ".p_slidetoggle" ).slideToggle( "slow");
  });

  $( ".append" ).click(function() {
    $( ".appended" ).append( "Appended");
  });

  $( ".slidedown" ).click(function () {
    if ( $( ".p_slidedown" ).is( ":hidden" ) ) {
      $( ".p_slidedown" ).slideDown( "slow" );
    } else {
      $( ".p_slidedown" ).hide();
    }
  });

  $( ".slideup" ).click(function () {
    if ( $( ".p_slideup" ).is( ":visible" ) ) {
      $( ".p_slideup" ).slideUp( "slow" );
    } else {
      $( ".p_slideup" ).show();
    }
  });

  $(".fadein").click(function() {
    if ( $( ".p_fadein" ).is( ":visible" ) ) {
      $( ".p_fadein" ).hide();
    } else {
      $( ".p_fadein" ).fadeIn( 3000 );
    }
  });

  $(".fadeout").click(function() {
    if ( $( ".p_fadeout" ).is( ":visible" ) ) {
      $( ".p_fadeout" ).fadeOut( 3000 );
    } else {
      $( ".p_fadeout" ).show();
    }
  });

  $( ".before" ).click(function() {
    $( ".p_before" ).before( "Appended before ");
  });

  $( ".after" ).click(function() {
    $( ".p_after" ).after( "Appended after ");
  });

  $( ".addhtml" ).click(function() {
    var htmlString = $(".d_addhtml").html();
    $(".d_addhtml").html(htmlString + "<p>Added new paragraph</p>");
    console.log(htmlString);
  });

  $( ".attr").click(function() {
    var btn = $(".attr").attr("type");
    $(".p_attr").text(btn);
  });

  $( ".val" ).click(function() {
    var text = $( ".p_val"  ).text();
    //console.log(text);
    $( "input" ).val( "Text has been entered!" );
  });

  $( ".text" ).click(function() {
    $( ".p_text" ).text( "Paragraph has changed!" );
  });

  $( ".data" ).click(function() {
    $( ".p_data" ).data("Paragraph has changed!" );
  });
});
