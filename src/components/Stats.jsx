import PropTypes from "prop-types";

export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <>
        <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
        <p className="stats" style={{ fontSize: 18, paddingTop: 10 }}>
          This app developed By{" "}
          <a href="https://github.com/YoussefYousry994">@Jimmy94</a> (Youssef
          Yousry)
        </p>
      </>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Got Everything Done! 🎉"
          : `You have ${numItems} items on your list and you already packed
        ${numPackedItems} (${percentage}%)`}
      </em>
      <br />
      <p style={{ fontSize: 18, paddingTop: 10 }}>
        This app developed By @Jimmy94 (Youssef Yousry)
      </p>
    </footer>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
