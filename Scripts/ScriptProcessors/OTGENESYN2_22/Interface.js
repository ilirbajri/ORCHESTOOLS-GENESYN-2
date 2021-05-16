Content.makeFrontInterface(879, 558);

          // filter combobox setup
          
const var FILTER = Synth.getEffect("FILTER");

const var modes = {"1 POLE LP": 9,"1 POLE HP": 10, "BIQUAD LP": 0, "BIQUAD HP": 1, "SVF LP": 6,"SVF HP": 7,"MOOG LP": 8, "BIQUAD REZ": 5, "LADDER 4P": 15, "LO SHELF": 2, "HI SHELF": 3, "PEAK EQ": 4, "SVF NOTCH": 12, "SVF BP": 13, "ALLPASS": 14, "RINGMOD": 17,};

const var FILTERSELECTOR = Content.getComponent("FILTERSELECTOR");

FILTERSELECTOR.set("items", ""); //Clear list

for (k in modes)
{
    FILTERSELECTOR.addItem(k); //Add mode name to list
}

inline function onFILTERSELECTORControl(component, value)
{
    FILTER.setAttribute(FILTER.Mode, modes[component.getItemText()]);
};

Content.getComponent("FILTERSELECTOR").setControlCallback(onFILTERSELECTORControl);

// filter 2 combobox setup
          
const var FILTER2 = Synth.getEffect("GLOBAL FILTER");

const var modes2 = {"1 POLE LP": 9,"1 POLE HP": 10, "BIQUAD LP": 0, "BIQUAD HP": 1, "SVF LP": 6,"SVF HP": 7,"MOOG LP": 8, "BIQUAD REZ": 5, "LADDER 4P": 15, "LO SHELF": 2, "HI SHELF": 3, "PEAK EQ": 4, "SVF NOTCH": 12, "SVF BP": 13, "ALLPASS": 14, "RINGMOD": 17,};

const var FILTER2SELECTOR = Content.getComponent("FILTER2SELECTOR");

FILTER2SELECTOR.set("items", ""); //Clear list

for (k in modes2)
{
    FILTER2SELECTOR.addItem(k); //Add mode name to list
}

inline function onFILTER2SELECTORControl(component, value)
{
    FILTER2.setAttribute(FILTER2.Mode, modes2[component.getItemText()]);
};

Content.getComponent("FILTER2SELECTOR").setControlCallback(onFILTER2SELECTORControl);

	// LFO1
	
const var LFO1 = Synth.getModulator("LFO1");

const var WaveFormType1 = {"SIN": 1, "TRI": 2, "SAW": 3, "SQR": 4, "RND": 5, "CST": 6,};
const var LFO1WaveForm = Content.getComponent("LFO1WaveForm");

LFO1WaveForm.set("items", ""); //Clear list
for (k in WaveFormType1)
{
    LFO1WaveForm.addItem(k); //Add mode name to list
}

inline function onLFO1WaveFormControl(component, value)
{
    LFO1.setAttribute(LFO1.WaveFormType, WaveFormType1[component.getItemText()]);
};

Content.getComponent("LFO1WaveForm").setControlCallback(onLFO1WaveFormControl);

	// LFO2
	
const var LFO2 = Synth.getModulator("LFO2");

const var WaveFormType2 = {"SIN": 1, "TRI": 2, "SAW": 3, "SQR": 4, "RND": 5, "CST": 6,};
const var LFO2WaveForm = Content.getComponent("LFO2WaveForm");

LFO2WaveForm.set("items", ""); //Clear list
for (k in WaveFormType2)
{
    LFO2WaveForm.addItem(k); //Add mode name to list
}

inline function onLFO2WaveFormControl(component, value)
{
    LFO2.setAttribute(LFO2.WaveFormType, WaveFormType2[component.getItemText()]);
};

Content.getComponent("LFO2WaveForm").setControlCallback(onLFO2WaveFormControl);

	// LFO3
	
const var LFO3 = Synth.getModulator("LFO3");

const var WaveFormType3 = {"SIN": 1, "TRI": 2, "SAW": 3, "SQR": 4, "RND": 5, "CST": 6,};
const var LFO3WaveForm = Content.getComponent("LFO3WaveForm");

LFO3WaveForm.set("items", ""); //Clear list
for (k in WaveFormType3)
{
    LFO3WaveForm.addItem(k); //Add mode name to list
}

inline function onLFO3WaveFormControl(component, value)
{
    LFO3.setAttribute(LFO3.WaveFormType, WaveFormType3[component.getItemText()]);
};

Content.getComponent("LFO3WaveForm").setControlCallback(onLFO3WaveFormControl);

	// LFO4
	
const var LFO4 = Synth.getModulator("LFO4");

const var WaveFormType4 = {"SIN": 1, "TRI": 2, "SAW": 3, "SQR": 4, "RND": 5, "PTN": 7,};
const var LFO4WaveForm = Content.getComponent("LFO4WaveForm");

LFO4WaveForm.set("items", ""); //Clear list
for (k in WaveFormType4)
{
    LFO4WaveForm.addItem(k); //Add mode name to list
}

inline function onLFO4WaveFormControl(component, value)
{
    LFO4.setAttribute(LFO4.WaveFormType, WaveFormType4[component.getItemText()]);
};

Content.getComponent("LFO4WaveForm").setControlCallback(onLFO4WaveFormControl);


// POST Panel

const var Post = Content.getComponent("POST");
const var PostButton = Content.getComponent("PostButton");
PostButton.setControlCallback(PostButtonCB);

inline function PostButtonCB(control, value)
{
    Post.showControl(value);
}

// LFO & ARP Panel

const var LFOArp = Content.getComponent("LFO PANEL");
const var LFOARPButton = Content.getComponent("LFOARPButton");
LFOARPButton.setControlCallback(LFOARPButtonCB);

inline function LFOARPButtonCB(control, value)
{
    LFOArp.showControl(value);
}

// Library Browser Panel

const var Library = Content.getComponent("LIBRARYBROWSER");
const var LibButton = Content.getComponent("LibButton");
LibButton.setControlCallback(LibButtonCB);

inline function LibButtonCB(control, value)
{
    Library.showControl(value);
}
function onNoteOn()
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
 