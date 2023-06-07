function InventoryItem({ itemDetails }) {
  return (
    <>
      <section>
        <h1>{itemDetails.item_name}</h1>
        <h1>{itemDetails.category}</h1>
        <h1>{itemDetails.status}</h1>
        <h1>{itemDetails.quantity}</h1>
        <h1>{itemDetails.warehouse_name}</h1>
        <div>
          <img src={""} />
          <img src={""} />
        </div>
      </section>
    </>
  );
}
export default InventoryItem;

// {
//     "id": "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
//     "warehouse_name": "Manhattan",
//     "item_name": "Television",
//     "description": "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
//     "category": "Electronics",
//     "status": "In Stock",
//     "quantity": 500
// }
