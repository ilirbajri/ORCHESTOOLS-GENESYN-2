Content.makeFrontInterface(879, 558);

          // E1 filter combobox setup
          
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

// POST Panel

const var Post = Content.getComponent("POST");
const var PostButton = Content.getComponent("PostButton");
PostButton.setControlCallback(PostButtonCB);

inline function PostButtonCB(control, value)
{
    Post.showControl(value);
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
 