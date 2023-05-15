(function(){
	'use strict';
	
	const tabs = document.querySelectorAll('#tabs > ul > li > a');
	
	/*
	for (let i=0; i<tabs.length; i++){
		tabs[i].addEventListener('click', selectTab);
	}
	*/
	
	tabs.forEach(tab => {
			tab.addEventListener('click', selectTab);
		});
		
	
	function selectTab(e){
		e.preventDefault();
		
		/*
		for(let i=0; i<tabs.length; i++) {
			tabs[i].removeAttribute( 'class' );
		}
		*/
		
		tabs.forEach(function(tab){
			tab.removeAttribute('class');
		});
		
		
		e.target.className = 'active';
		
		const thisTab = e.target.getAttribute('href');
		
		const thisContent = document.querySelector(thisTab);
		
		const oldContent = document.querySelector('.visible');
		
		oldContent.className = 'visuallyhidden';
		
		oldContent.addEventListener('transitionend', function(){
			oldContent.className = 'hidden';
			
			thisContent.className = 'visible visuallyhidden';
			
			setTimeout(function(){
				thisContent.classList.remove('visuallyhidden');
			}, 20);
		}, {capture:false, once:true, passive:false});
	}
	
	
}());