const express = require('express');
const { getNote, createNote, deleteNote, updateNote } = require('../controllers/noteController');
const auth = require('../middlewares/auth');
const noteRouter = express.Router();
const Note = require('./../models/note');


noteRouter.post("/", auth, createNote);


noteRouter.put("/:id", auth, updateNote)


noteRouter.delete("/:id", auth, deleteNote)


noteRouter.get("/", auth, getNote);



module.exports = noteRouter;