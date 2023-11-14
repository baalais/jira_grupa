import '../Style/Add-task.css';

const AddTask = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const title = e.target.title.value;
      const description = e.target.description.value;
      const date = e.target.date.value;
      const time = e.target.time.value;
      const priority = e.target.priority.value;
  
      // You can send the data to your server here using an API call or form submission.
      console.log('Title:', title);
      console.log('Description:', description);
      console.log('Date:', date);
    };
  
    return (
      <div className="container">
        <h1>Add task</h1>
        <form id="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" className="form-control" required />
  
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" className="form-control" required></textarea>
  
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" className="form-control" required />
  
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };
  
  export default AddTask;