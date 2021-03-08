function NoteController(options){
  const {noteService} = options;

  this.createNote = async(req,res,next) => {
    try {
      const noteFromBody = Object.create(null);
      noteFromBody.title = req.body.title;
      noteFromBody.content = req.body.content;
      noteFromBody.creationDate = req.body.creationDate;
  
      res.status(200).json(await noteService.createNote(noteFromBody));
    } catch (e) {
      next(e);
    }
  }

  this.getAllNotes = async(req,res,next) => {
    try {
      const result = await noteService.getAllNotes();
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }

  this.getNoteById = async(req,res,next) => {
    try {
      const result = await noteService.getNoteById(req.params.id);
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }

}

export default NoteController;