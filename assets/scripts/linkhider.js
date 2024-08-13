const thisUrlTail = $(location).attr('href').split("/").pop();
$(`footer a[href='${thisUrlTail}']`).hide();