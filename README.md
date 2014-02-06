AJAX Browser
==
A simple yet powerful jQuery/Ajax plugin to load your website in a fancy way. You can make use of it by following the 4 easy steps below and/or check out the demo in the demo map.

## Step 1

Include jQuery library and the InHouse Ajax plugin in your header:

## Step 2

Add the following code at the very top of any page you would like to AJAX.

< <?php ob_start(); ?>
## Step 3

Add the following code at the very bottom

< <?php if( !empty($SERVER['HTTPX_REQUESTED_WITH']) && strtolower($SERVER['HTTPX_REQUESTED_WITH']) == 'xmlhttprequest' ) { $html = ob_get_clean(); echo preg_replace("/^.+". preg_quote("<!-- start ajax -->") . "(.+)". preg_quote("<!-- end ajax -->") >.".+$/is","$1", $html); } ?>
## Step 4

And off you go! Anything between <!-- start ajax --> and <!-- end ajax --> will be given as response. Please note that the default destination for the ajaxed content is any element given the #container ID.

##### Made by Remy Martin Lagerweij - http://behance.net/remylagerweij - http://github.com/remylagerweij