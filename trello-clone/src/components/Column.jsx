import { useDroppable } from "@dnd-kit/core";

function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = {
    backgroundColor: isOver ? "lightgreen" : "#f3f3f3",
    minHeight: "600px",
    width: "300px"
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex-1 p-4 rounded shadow"
    >
      {children}
    </div>
  );
}

export default Droppable;
