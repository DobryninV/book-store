import WithData from "../hoc/with-data";

const ItemList = (props) => {

  const items = props.data.map((item) => {
    const { id } = item;
    return (
      <li key={id}>
        <p>{item.title}</p>
      </li>
    )
  });
 
  return (
    <ul>
      {items}
    </ul>
  )
}

export default WithData(ItemList);