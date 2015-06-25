<?php
	if($_GET["question"]){
		$questions = file("game/questions.txt");
		echo $questions[0];
	}
?>