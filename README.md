AJAX Browser
==
A simple yet powerful jQuery/Ajax plugin to browse your website in with fancy animations. You can make use of it by following the 4 easy steps below and/or check out the demo in the demo map.

## Features: 
- Internal links load the page with AJAX and and a sweet animation
- External links open in new window
- Back/Forward buttons in the browser are AJAX supported, animated and saved into your history
- Adress bar gets filled with opened link

## Step 1

Include jQuery library and the InHouse Ajax plugin in your header:

## Step 2

Add the following code at the very top of any page you would like to AJAX.
> <?php ob_start(); ?>

## Step 3

Add the following code at the very bottom

> <?php if( !empty($SERVER['HTTPX_REQUESTED_WITH']) && strtolower($SERVER['HTTPX_REQUESTED_WITH']) == 'xmlhttprequest' ) { $html = ob_get_clean(); echo preg_replace("/^.+". preg_quote("<!-- start ajax -->") . "(.+)". preg_quote("<!-- end ajax -->") >.".+$/is","$1", $html); } ?>

## Step 4

And off you go! Anything between <!-- start ajax --> and <!-- end ajax --> will be given as response. Please note that the default destination for the ajaxed content is any element given the #container ID.


# Add other jQuery plugins.

Other jQuery plugins can be called in the page with use of the following code in the desired div instead of adding script tags on the bottom of the page to bind it to certain classes or ID's.

> data-plugin="pluginfunction"

## Parameters

This new feature allows you to edit variables with a defined value as a parameter.

> data-variabletoedit="value"

## Example

So this could be all the code you need to include jQuery plugins.
<div data-plugin="slider" data-speed="500"></div>


##### Made by Remy Martin Lagerweij - http://behance.net/remylagerweij - http://github.com/remylagerweij
