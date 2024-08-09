import { useEffect, useState } from "react";
import { youtubers } from "../../Youtubers";
import Clientes from "./Clientes";

const ClientesContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getyoutuber = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(youtubers);
      } else reject({ message: "error" });
    });

    getyoutuber.then((res) => {
      setItems(res);
    });
  }, []);

  return <Clientes items={items} />;
};

export default ClientesContainer;
