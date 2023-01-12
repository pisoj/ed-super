var tableContent = document.querySelectorAll('.exam-table');

var dropdownMenu = document.querySelector('.js-dropdown-menu-content');

var test = new DropdownMenuContentSwitch(tableContent, dropdownMenu);

dropdownMenu.addEventListener('click', function(e){
	if (e.target.classList.contains('js-show-all')){
		var dropdownMonths = dropdownMenu.querySelectorAll('.older');	
		for(var i=0; i<=dropdownMonths.length;i++){
			if (dropdownMonths[i]) {
				dropdownMonths[i].classList.remove('hide');	
			}
		}		

		for(var i=0; i<=tableContent.length;i++){
			if (tableContent[i]){
				var days = tableContent[i].querySelectorAll('.older');
				for (var j = 0; j<=days.length;j++){
					if (days[j]) {
						days[j].classList.remove('hide');
					}
				}
			}
		}
	}
});