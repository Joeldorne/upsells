$(document).ready(function(){
  
 $("#order").click(function(){
    $("ch-button[type=''] button[type='submit']").click(); // Order button
 });

 $("#cancel").click(function(){
   $("ch-button[type='decline'] button[type='submit']").click();  // cancel button
 });
  
});



// Added CDN
document.querySelector('head').insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.css" type="text/css"/>');
// MY HTML
document.querySelector(".container").insertAdjacentHTML('afterbegin', 
                                                        
                                                        '<div class="row nav center-xs middle-xs">' +
                                                        	'<div class="col-xs-12">' +
                                                        		'<h1>Logo</h1>' +
                                                        	'</div>' +
                                                        '</div>' +
                                                        
                                                        

                                                        
                                                        
                                                        '<div class="col-xs-12">' +
                                                        '<div class="row center-xs">' +
                                                        '<div class="col-xs-11 col-md-6 col-sm-6 steps">' +
                                                        '<div class="row center-xs">' +
                                                        		'<!-- 1st Step -->' +
                                                        		'<div class="col-md-4 col-xs-12 col-sm-4 step current-step">' +
                                                        			'<div class="row middle-xs center-xs">' +
                                                        				'<span class="step-dot"></span>' +
                                                        					'<p>Step 1</p>'+
                                                        			'</div>' +
                                                        		'</div>' +
                                                        		'<!-- 2nd Step -->' +
                                                        		'<div class="col-md-4 col-xs-12 col-sm-4 step">' +
                                                        			'<div class="row middle-xs center-xs">' +
                                                        				'<span class="step-dot"></span>' +
                                                        					'<p>Step 2</p>'+
                                                        			'</div>' +
                                                        		'</div>' +
                                                        		'<!-- 3nd Step -->' +
                                                        		'<div class="col-md-4 col-xs-12 col-sm-4 step">' +
                                                        			'<div class="row middle-xs center-xs">' +
                                                        				'<span class="step-dot"></span>' +
                                                        					'<p>Step 3</p>'+
                                                        			'</div>' +
                                                        		'</div>' +
                                                        	
                                                        '</div>' +
                                                        '</div>' +
                                                        '</div>' +
                                                        '</div>' +
                                                        '<button id="order">Order</button>' +
                                                        '<button id="cancel">Cancel</button>' 
                                                     
                                                        
             
                                                       );



