const Items = require("../models/registerDB");
//get all items
exports.getallitems = async(req, res) => {
    try {
        const itemdetails = await Items.find({});
        res.status(200).json(itemdetails);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
//get items by id
exports.getitemsbyid= async(req, res) =>{
    try {
        const {id} = req.params;
        const specificitem = await Items.findById(id);
    
        res.status(200).json(specificitem);
    } catch (error) {
        res.status(400).json({message: `You Entered Wrong ItemId`})
    }
}
//create new item
exports.createitem= async(req, res) => {
    try {
        const newitem = await Items.create(req.body)
        res.status(201).json(newitem);
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message: error.message})
    }
}

// update an item by id
exports.updateitembyid= async(req, res) => {
    try {
        const {id} = req.params;
        const option={new:true};
        const edititem = await Items.findByIdAndUpdate(id, req.body,option);

        const updateditem = await Items.findById(id);
        res.status(200).json(edititem);
        
    } catch (error) {
        res.status(400).json({message: `You Entered Wrong ItemId`})
    }
}
// delete an item by id
exports.deleteitembyid= async(req, res) =>{
    try {
        const {id} = req.params;
        const delitem = await Items.findByIdAndDelete(id);
        res.status(200).json(delitem);
        
    } catch (error) {
        res.status(400).json({message: `You Entered Wrong ItemId`})
    }
}
//200 - ok(success)
//201 - created
//400 - Badrequest
//404 - resourse not found