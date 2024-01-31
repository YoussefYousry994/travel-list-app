import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(id);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id !== id) return item;
        return { ...item, packed: !item.packed };
      })
    );
  }

  function nullChecker() {
    if (items === null) return;
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete all of the list ?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItems={handleRemoveItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
        onNullCheck={nullChecker}
      />
      <Stats items={items} />
    </div>
  );
}
