Content.makeFrontInterface(879, 558);

// Library Browser Panel

const var Library = Content.getComponent("LIBRARYBROWSER");
const var LibButton = Content.getComponent("LibButton");
LibButton.setControlCallback(LibButtonCB);

inline function LibButtonCB(control, value)
{
    Library.showControl(value);
}

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
 