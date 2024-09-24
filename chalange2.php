
<?php
function replaceVowelsWithX($str) {
    $vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    $modifiedStr = str_replace($vowels, 'x', $str);
    
    return $modifiedStr;
}

?>