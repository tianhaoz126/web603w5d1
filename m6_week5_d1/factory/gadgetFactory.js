const Laptop = require("./laptop");
const Tablet = require("./tablet");

const gadget = { Laptop, Tablet };

// add module.export here
module.exports={
    createGadget(type, attribtues){
        const GadgetType = gadget[type];
        return new GadgetType(attribtues);
    }
};