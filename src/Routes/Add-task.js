import '../Style/Add-task.css';

const AddTask = () => {
      const handleSubmit = async (e) => { // <-- Ensure this function is marked as async
        e.preventDefault();
      
        const title = e.target.title.value;
        const description = e.target.description.value;
        const dueDate = e.target.date.value;
        const user_id = 1; // Assuming you have the user ID to pass
      
        const formData = {
          title: title,
          description: description,
          date: dueDate,
          user_id: user_id,
        };
      console.log(formData);
        try {
          const response = await fetch('http://localhost/a/db.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            // Task added successfully
            console.log('Task added successfully');
            // Optionally, you can redirect the user or perform other actions here
          } else {
            // Handle error
            console.error('Failed to add task');
          }
        } catch (error) {
          console.error('Error:', error);
        }
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