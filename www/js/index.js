var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready"); //here is the event listener 
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count); //these are the lifecycle events that are captured
		$("#resumed").text("Application paused: " + paused_count); //these are the lifecycle events that are captured
		$("#paused").text("Application resumed: " + resumed_count); //these are the lifecycle events that are captured
	}


    // device APIs are available
    // here is the event handler
    function onDeviceReady() {
		alert("hi olivia"); //the event handler reacts to a function
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    // 
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
