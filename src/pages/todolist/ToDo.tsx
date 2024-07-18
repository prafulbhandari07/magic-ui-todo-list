import React, { useState } from "react";
import { BorderBeam } from "../../components/magicui/border-beam";
import SparklesText from "../../components/magicui/sparkles-text";
import ShinyButton from "../../components/magicui/shiny-button";
import Popup from "../../components/ui/Popup";

function ToDo() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [tasks, setTasks] = useState<string[]>([]);

  const addItem = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-4 overflow-hidden">
        <div className="flex justify-between items-center w-[75%]">
          <SparklesText text="To-Do-List" />
          <ShinyButton onClick={addItem} text="Add Task" />
        </div>
        <div className="relative min-h-[50%] w-[80%] rounded-xl border-[1px]">
          <BorderBeam />
          {tasks.length === 0 ? (
            <div className=" flex justify-center items-center h-full">
              <h1 className="font-mono text-2xl">
                No tasks found. Please create a new task.
              </h1>
            </div>
          ) : (
            <ul className="w-full">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="border-b px-5 py-4 flex justify-between items-center"
                >
                  {task}
                  <button
                    onClick={() => removeTask(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Popup show={showPopup} onClose={closePopup} onAddTask={addTask} />
    </>
  );
}

export default ToDo;
