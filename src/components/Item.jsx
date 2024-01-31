import PropTypes from "prop-types";

export default function Item({ item, onRemoveItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItems(item.id)}>❌</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemoveItems: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};
