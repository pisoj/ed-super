//ako je jedan ili vise class-menu dropdowna na stranici
if (document.querySelectorAll('.class-menu').length >= 1){
    var clikedOption = document.querySelectorAll('.class-menu');
    clikedOption.forEach( cc => cc.addEventListener('click', function (event) {
    	event.stopPropagation();
        var studentClassID = event.target.closest('.class-info').getAttribute('data-action-id');
        var studentMenuOption = event.target.classList[0];
        
        event.target.setAttribute('href', '/class_action/'+studentClassID+'/'+studentMenuOption);
    }));
}