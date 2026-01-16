import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("You reach notes");
});

router.post("/", (req, res) => {
    res.status(201).json({message: "post created successfully"})
})

router.post("/:id", (req, res) => {
    res.status(200).json({message: "post updated successfully"})
})

router.post("/:id", (req, res) => {
    res.status(200).json({message: "note deleted successfully"})
})

export default router;