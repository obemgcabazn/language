<?php
	$file = file_get_contents('base.json');
	
	echo '<pre>';
	print_r($file);
	echo '</pre>';
	
	$json = json_encode($file );
	echo '<pre>';
	print_r($json);
	echo '</pre>';
	
	$decode = json_decode($file, TRUE );
	echo '<pre>';
	print_r($decode);
	echo '</pre>';
	
	
	$new = json_encode( $decode );
	echo '<pre>';
	print_r($new);
	echo '</pre>';
	
	$new1 = json_decode($json);
	echo '<pre>';
	print_r($new1);
	echo '</pre>';