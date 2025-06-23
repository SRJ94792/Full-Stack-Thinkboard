import Note from "../models/Note.js";

export async function getallnotes (req,res) {
try{
    const notes =await Note.find().sort({createdAt:-1}); 
    res.status(200).json(notes) 
} catch(error){
    console.error("Error in getAllNotes controller",error)
    res.status(500).json({message:"Internal server error"});}
     
};

export async function cretanotes (req,res) {
try{
    const {title,content}= req.body;
    const newNote = new Note({title,content});

    const note = await newNote.save();
    res.status(201).json({note});
} catch (error){
console.error("Error in createNote controller",error);
res.status(500).json({message:"Internal server error"})
}


};

export async function updatenotes (req,res) {
    try{ 
        const {title,content}=req.body;
        const updatenotes = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if (!updatenotes) return res.status(404).json({message:"Note not found"});
        res.status(200).json(updatenotes);
    }catch (error){
        console.error("Error in updating Note controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};

export async function delnotes (req,res) {
    try{
        const delnotes= await Note.findByIdAndDelete(req.params.id)
        if (!delnotes) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note deleted successfully!"})
    } catch(error){
        console.error("Error in deleting Note controller",error);
        res.status(500).json({message:"Internal server error"});

    }



};

export async function getnotebyid (req,res) {
try{
    const nots= await Note.findById(req.params.id)
    if (!nots) return res.status(404).json({message:"Note not found"});
    res.status(200).json(nots)
} catch(error){
    console.error("Error in getNotebyid controller",error)
    res.status(500).json({message:"Internal server error"});
}

};