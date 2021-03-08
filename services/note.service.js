function NoteService(options) {
  const { repository } = options;

  this.createNote = async (note) => {
    return await repository.create(note);
  };

  this.getAllNotes = async (note) => {
    return await repository.getAll();
  };

  this.getNoteById = async (id) => {
    return await repository.getById(id);
  };
}

export default NoteService;
