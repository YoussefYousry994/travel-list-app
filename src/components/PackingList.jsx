import { useState } from "react";
import Item from "./Item";
import PropTypes from "prop-types";

export default function PackingList({
  items,
  onRemoveItems,
  onToggleItems,
  onClearList,
  onNullCheck,
}) {
  const [sort, setSort] = useState("input");

  let sorteditems;

  if (sort === "input") sorteditems = items;

  if (sort === "description") {
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sort === "packed") {
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item
            key={item.id}
            onRemoveItems={onRemoveItems}
            onToggleItem={onToggleItems}
            item={item}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={(onNullCheck, onClearList)}>Clear list</button>
      </div>
    </div>
  );
}

PackingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onRemoveItems: PropTypes.func.isRequired,
  onToggleItems: PropTypes.func.isRequired,
  onClearList: PropTypes.func.isRequired,
  onNullCheck: PropTypes.func.isRequired,
};
