import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/actions";

function TaskItem({ task, index }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDeleteTask = () => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleSaveTask = () => {
    if (editedTask.trim()) {
      dispatch(editTask(index, editedTask));
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTask(task);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className="save" onClick={handleSaveTask}>
            Save
          </button>
          <button className="cancel" onClick={handleCancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>{task}</span>
          <button className="edit" onClick={handleEditTask}>
            Edit
          </button>
          <button className="delete" onClick={handleDeleteTask}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
