import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import "./InventorieList.scss";

function InventorieList() {

  const [defaultWarehouses, setdefaultWarehouses] = useState(null);
  
    const fetchWarehouses = () => {
      axios
      .get(getWarehousesEndpoint)
      .then((response) => {
        setdefaultWarehouses(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
    }

  useEffect(() => {
    fetchWarehouses();
  }, []);

  if (!defaultWarehouses) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <WarehouseDetails fetchWarehouses={fetchWarehouses}/>
      <section>

      </section>
    </>
  );
}
export default InventorieList;
