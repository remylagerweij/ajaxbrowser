$(function()
{
	// Set the current page adress
	window.history.replaceState({page: ''}, "/Title", '');

   function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
	}

	var domain = get_hostname(window.location.href);

	// Is link external? make use with: $('a:external')
	$.expr[':'].external = function (a) {
        var ext_url = /^\w+:\/\//;
        var href = $(a).attr('href');
        if(domain !== null && href.substring(0, domain.length) == domain) {
        	return false;
        }
        return href !== undefined && href.search(ext_url) !== -1;
    };
    // Is link internal? make use with: $('a:internal')
    $.expr[':'].internal = function (a) {
        return $(a).attr('href') !== undefined && !$.expr[':'].external(a);
    };

    // Open the external link in new window
    $('a:external').attr({"target" : "_blank"})
	
	// Plugin Loader
    var pluginloader = function(){
		$( "#container [data-plugin]" ).each(function(i,el){
			$el = $(el);
			$el[ $el.data().plugin ]($el.data());
		});
	}

    // AJAX Function called to VAR
	var loadPage = function(event, page, push) {
		event.preventDefault();
    	$.ajax(
    	{
			url: page,
			cache: false,
			dataType: "html"

		})
		
		.done(function( html ) 
		{
			$( "#container" ).slideUp(function()
			{
				$( "#container" ).html( html );
				$( "#container" ).slideDown(pluginloader);

			});
		 });
		if (push) {
				window.history.pushState({page: page}, "/Title", page);
		}

	};

	// Execute ajax whenever internal link clicked
	$( document ).on( "click", "a:internal", function(event) 
	{
  			loadPage(event, $(this).attr('href'), true);
		});


	// Execute ajax when navigating through back/forward buttons
    window.onpopstate = function(event) {
    	if (event.state) {
	    	loadPage(event, event.state.page, false);
	    }
    };
   pluginloader()
});
