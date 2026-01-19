import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Escribe el titulo de la tarea"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Escribe la descripción de la tarea"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          // Verificar se o título e a descrição estão preenchidos
          if (!title.trim() || !description.trim) {
            return alert("Preencha el titulo y la descriptión de la tarea.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font=medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
