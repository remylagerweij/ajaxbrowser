$(function()
{
	// Set the current page adress
	window.history.replaceState({page: ''}, "/Title", '');
	
	// Is link external? make use with: $('a:external')
	$.expr[':'].external = function (a) {
        var PATTERN_FOR_EXTERNAL_URLS = /^\w+:\/\//;
        var href = $(a).attr('href');
        return href !== undefined && href.search(PATTERN_FOR_EXTERNAL_URLS) !== -1;
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
		$('script').remove()
	};

	// Execute ajax whenever internal link clicked
	$('a:internal').click(function(event)
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
