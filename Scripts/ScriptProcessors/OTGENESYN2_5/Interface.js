Content.makeFrontInterface(975, 558);

// LFO 1 frequency mode script

const var LFO1FREQ = Content.getComponent("LFO1Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO1Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO1MOD = Synth.getModulator("LFO1");

const var LFO1Sync = Content.getComponent("LFO1Sync");

inline function onLFO1SyncControl(component, value)
{
	// Sync Mode LFO1
	LFO1MOD.setAttribute(LFO1MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO1FREQ.set("mode", "TempoSync");
		LFO1FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO1FREQ.set("mode", "Frequency");
		LFO1FREQ.set("min", 0.00);
		LFO1FREQ.set("max", 50);
		LFO1FREQ.set("middlePosition", 5);
	}
};

LFO1Sync.setControlCallback(onLFO1SyncControl);

// LFO 2 frequency mode script

const var LFO2FREQ = Content.getComponent("LFO2Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO2Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO2MOD = Synth.getModulator("LFO2");

const var LFO2Sync = Content.getComponent("LFO2Sync");

inline function onLFO2SyncControl(component, value)
{
	// Sync Mode LFO2
	LFO2MOD.setAttribute(LFO2MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO2FREQ.set("mode", "TempoSync");
		LFO2FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO2FREQ.set("mode", "Frequency");
		LFO2FREQ.set("min", 0.00);
		LFO2FREQ.set("max", 50);
		LFO2FREQ.set("middlePosition", 5);
	}
};

LFO2Sync.setControlCallback(onLFO2SyncControl);

// LFO 3 frequency mode script

const var LFO3FREQ = Content.getComponent("LFO3Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO3Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO3MOD = Synth.getModulator("LFO3");

const var LFO3Sync = Content.getComponent("LFO3Sync");

inline function onLFO3SyncControl(component, value)
{
	// Sync Mode LFO3
	LFO3MOD.setAttribute(LFO3MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO3FREQ.set("mode", "TempoSync");
		LFO3FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO3FREQ.set("mode", "Frequency");
		LFO3FREQ.set("min", 0.00);
		LFO3FREQ.set("max", 50);
		LFO3FREQ.set("middlePosition", 5);
	}
};

LFO3Sync.setControlCallback(onLFO3SyncControl);


// DELAY mode 

const var LeftDelayTimerSync = Content.getComponent("DELAYTIMELEFT");
const var RightDelayTimerSync = Content.getComponent("DELAYTIMERIGHT");
const var SyncFreeButton = Content.getComponent("DELAYSYNC");
const var Delay1 = Synth.getEffect("Delay1");



// [JSON Knob]

Content.setPropertiesFromJSON("LeftDelayTimerSync", {
  "mode": "TempoSync",
  "stepSize": 1,
});

Content.setPropertiesFromJSON("RightDelayTimerSync", {
  "mode": "TempoSync",
  "stepSize": 1,
});



inline function onSyncFreeButtonControl(component, value)
{
	 Delay1.setAttribute(Delay1.TempoSync, value);
	
	if(value)
	{
		// Switch the knob to tempo sync mode
		LeftDelayTimerSync.set("mode", "TempoSync");
		LeftDelayTimerSync.set("max", 18);
		LeftDelayTimerSync.set("min", 0);
		LeftDelayTimerSync.set("stepSize", 1);
		LeftDelayTimerSync.set("middlePosition", 9);
		
		RightDelayTimerSync.set("mode", "TempoSync");
		RightDelayTimerSync.set("max", 18);
		RightDelayTimerSync.set("min", 0);
		RightDelayTimerSync.set("stepSize", 1);
		RightDelayTimerSync.set("middlePosition", 9);
		
		
		
	}
	else
	{
		// Switch the knob to frequency mode
		LeftDelayTimerSync.set("mode", "Frequency");
		LeftDelayTimerSync.set("min", 0.5);
		LeftDelayTimerSync.set("max", 1400);
		LeftDelayTimerSync.set("middlePosition", 700);
		LeftDelayTimerSync.set("stepSize", 0.01);
		
		
		
		RightDelayTimerSync.set("mode", "Frequency");
		RightDelayTimerSync.set("min", 0.5);
		RightDelayTimerSync.set("max", 1400);
		RightDelayTimerSync.set("middlePosition", 700);
		RightDelayTimerSync.set("stepSize", 0.01);
		
		
		
		
	}
};

SyncFreeButton.setControlCallback(onSyncFreeButtonControl);


// PitchWheel ratio

const var PWHEEL1MOD = Synth.getModulator("PWHEEL1MOD");

inline function onPITCHWHEELrangeControl(component, value)
{
	PWHEEL1MOD.setIntensity(value/2);	
};

Content.getComponent("PITCHWHEELrange").setControlCallback(onPITCHWHEELrangeControl);

// Library panel

const var LibButton= Content.getComponent("LibButton");
const var LIBRARYBROWSER = Content.getComponent("LIBRARYBROWSER");

inline function onLibButtonControl(component, value)
{
	if (value)
    {
        LIBRARYBROWSER.showControl(true);
    }
    else
    {
        LIBRARYBROWSER.showControl(false);
    }
};

Content.getComponent("LibButton").setControlCallback(onLibButtonControl);

// Settings panel

const var Settings = Content.getComponent("Settings");
const var SettButton = Content.getComponent("SettButton");
SettButton.setControlCallback(SettButtonCB);

inline function SettButtonCB(control, value)
{
    Settings.showControl(value);
}

// MIDI learn panel

const var MIDI = Content.getComponent("MIDI");
const var MIDIButton = Content.getComponent("MIDIButton");
MIDIButton.setControlCallback(MIDIButtonCB);

inline function MIDIButtonCB(control, value)
{
    MIDI.showControl(value);
}function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 