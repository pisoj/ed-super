if (document.querySelectorAll('.class-alerts').length >= 1){
    var clikedOption = document.querySelectorAll('.class-alerts');
    clikedOption.forEach( cc => cc.addEventListener('click', function (event) {
        var studentClassID = event.target.closest('.class-info').getAttribute('data-action-id');
        var studentMenuOption = event.target.closest('a').classList[0];
     
        event.target.closest('a').setAttribute('href', '/class_action/'+studentClassID+'/'+studentMenuOption);
    }));
}