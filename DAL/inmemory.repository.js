function InMemoryRepository() {
  const notes = [];

  this.create = async (note) => {
    note._id = notes.length;
    notes.push(note);
    return note;
  }

  this.getAll = async() => {
    return notes;
  }

  this.getById = async(id) => {
    return notes[id];
  }
}

export default InMemoryRepository;