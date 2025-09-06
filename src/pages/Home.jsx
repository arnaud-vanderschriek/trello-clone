import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../components/Card";
import Droppable from "../components/Column";

function Home() {
  const [board, setBoard] = useState({
    todo: [{ id: "1", content: "Apprendre React" }],
    progress: [{ id: "2", content: "Coder drag&drop" }],
    qa: [{ id: "3", content: "Test 3" }],
    cr: [{ id: "4", content: "Test 4" }],
    done: [{ id: "5", content: "Installer @dnd-kit" }],
  });

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const fromColumn = Object.keys(board).find((col) =>
      board[col].some((task) => task.id === active.id)
    );
    const toColumn = over.id;

    if (!fromColumn || !toColumn || fromColumn === toColumn) return;

    const task = board[fromColumn].find((t) => t.id === active.id);

    setBoard((prev) => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter((t) => t.id !== active.id),
      [toColumn]: [...prev[toColumn], task],
    }));
  }

  return (
    <main className="p-4 mt-20">
      <h1 className="text-4xl font-bold mb-6">Welcome to Trello-clone</h1>
      <DndContext onDragEnd={handleDragEnd}>
        <section className="flex gap-6">
          <Droppable id="todo">
            <h2 className="font-semibold mb-2">📝 To Do</h2>
            {board.todo.map((task) => (
              <Draggable key={task.id} id={task.id}>
                {task.content}
              </Draggable>
            ))}
          </Droppable>

          <Droppable id="progress">
            <h2 className="font-semibold mb-2">⚡ in progress</h2>
            {board.progress.map((task) => (
              <Draggable key={task.id} id={task.id}>
                {task.content}
              </Draggable>
            ))}
          </Droppable>

          <Droppable id="qa">
            <h2 className="font-semibold mb-2">✅ QA</h2>
            {board.qa.map((task) => (
              <Draggable key={task.id} id={task.id}>
                {task.content}
              </Draggable>
            ))}
          </Droppable>

          <Droppable id="cr">
            <h2 className="font-semibold mb-2">✅ Code Review</h2>
            {board.cr.map((task) => (
              <Draggable key={task.id} id={task.id}>
                {task.content}
              </Draggable>
            ))}
          </Droppable>

          <Droppable id="done">
            <h2 className="font-semibold mb-2">✅ Done</h2>
            {board.done.map((task) => (
              <Draggable key={task.id} id={task.id}>
                {task.content}
              </Draggable>
            ))}
          </Droppable>
        </section>
      </DndContext>
    </main>
  );
}

export default Home;
