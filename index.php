<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
<title>Het Dolhof</title>
<!--<link href="css.css" type="text/css" rel="stylesheet">-->
</head>
<style>
    .star, .path {
        display: inline-block;
        height: 14px;
        width: 16px;
    }

    i{
        font-style: normal;
        color: #b86539;
    }
    .gelopen {
        background-color: #ff7b7b;
    }
    .green {
        background-color: #c8b88a;
    }
</style>
<body>
<div id="maze">
<?php 
    //$url ="https://raw.githubusercontent.com/lyfter/stage-challenges/master/7/input.txt";
    //$file = file_get_contents($url);
    //$rows = explode("\n", $file);
    $rows = explode("\n", file_get_contents("https://raw.githubusercontent.com/lyfter/stage-challenges/master/7/input.txt"));
    foreach ($rows as $rowKey => $row) {
        echo '<div>';
        foreach (str_split($row) as $colKey => $val) {
            if ($val == '*') {
                echo '<div class="star" data-row="'.$rowKey.'" data-col="'.$colKey.'"><i class="fas fa-chimney"></i></div>';
            } else {
                echo '<div class="path" data-row="'.$rowKey.'" data-col="'.$colKey.'"></div>';
            }
        }
        echo '</div>';
    }
?>
</div>
</body>
<script src="js/ok.js" type="text/javascript"></script>
</html>