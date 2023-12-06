import { useState } from 'react';
import '../Style/Add-task.css';
import { hasSpecialCharacters } from '../functions';

const AddTask = () => {
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleSubmit = async (e) => { // <-- Ensure this function is marked as async
    e.preventDefault();
    

    const title = e.target.title.value;
    const description = e.target.description.value;
    const dueDate = e.target.date.value;
    const user_id = 1;
    const status = e.target.status.value; // Assuming you have the user ID to pass

    if (hasSpecialCharacters(title)){
      setTitleError('Please do not use special characters in the title or description.');
      return;
    }
    if (hasSpecialCharacters(description)) {
      setDescriptionError('Please do not use special characters in the title or description.');
      return;
    }
    setTitleError("");
    setDescriptionError("");
    
    

    const formData = {
      title: title,
      description: description,
      date: dueDate,
      user_id: user_id,
      status: status,
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
        
        console.log(response.status);
   
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
      <div id="error-message">{titleError}</div>

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" className="form-control" required></textarea>
      <div id="error-message">{descriptionError}</div>

      <label htmlFor="date">Date</label>
      <input type="date" id="date" name="date" className="form-control" required />

      <label htmlFor="status">Status</label>
      <select name="status" id="status" className="form-control" required>
        <option value="1">Pending</option>
        <option value="2">In progress</option>
      </select>

      <button type="submit" class="poga">Add</button>
    </form>
  </div>
);
};

export default AddTask;