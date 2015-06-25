<?php
	if(isset($_GET["question"])){
		$questions = file("game/1/questions.txt");
		echo $questions[0];
	}
	if(isset($_GET["answer"])){
		$questions = file("game/" . $_GET["section"] . "/" . $_GET["answer"] . "/questions.txt");
	}
?>