import express from "express"
import { cretanotes, delnotes, getallnotes, updatenotes,getnotebyid } from "../controllers/notesControllers.js";
const router= express.Router();
router.get("/",getallnotes);
router.get("/:id",getnotebyid);
router.post("/",cretanotes);
router.put("/:id",updatenotes);

router.delete("/:id",delnotes);

export default router;


