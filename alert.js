//plugin for custom confirm
(function($){
	$.fn.confirm = function(userObject,callbackFunction){

		defaultObject = {
			'headline': 'Confirm Box',
			'message': 'Are you sure'
		};
		//merging the content of the userObject in to default object
		var option = $.extend(defaultObject, userObject);

		var markup = '<div class="confirm-h"><span></span><button class="close">x</button></div><div class="confirm-b"><p></p></div><div class="confirm-f"><button id="cancel-btn" class="btn btn-grey">Cancel</button><button class="btn btn-blue" id="function-btn">Ok</button></div>',
			$this = $(this);

		//create a overlay div
		var createOverlay = '<div class="overlay"></div>';
		$(createOverlay).appendTo('body');
		//add confirm box class to the div
		$this.addClass('confirm-container');

		//append markup to the confirm box
		$(markup).appendTo($this);

		//list header footer and body in variables
		var headerTitle = $('.confirm-h span',$this),
			closeBtn = $('.confirm-h button.close', $this),
			body = $('.confirm-b p',$this),
			cancelBtn = $('.confirm-f #cancel-btn', $this),
			okBtn = $('.confirm-f #function-btn', $this),
			windowW = $(document).width(),
			windowH = $(document).height(),
			boxW = $this.width(),
			boxH = $this.height(),
			overlay = $('.overlay');

		//close box function
		var closeBox = function(){
			$this.slideUp(500);
			overlay.fadeOut();
			$this.html('');
		}

		headerTitle.text(option.headline);
		body.text(option.message);
		okBtn.click(callbackFunction);
		cancelBtn.click(closeBox);
		closeBtn.click(closeBox);
		//center the box
		$this.css('left', (windowW/2) - (boxW/2)).css('top', '150px');
		//show the box and overlay
		overlay.fadeIn();
		$this.slideDown(500);

	}
}) (jQuery);