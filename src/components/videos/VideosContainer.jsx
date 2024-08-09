import { useEffect, useState } from "react";
import { Videos } from "./Videos";
import { videos } from "../../videos";

export const VideosContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getVideos = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(videos);
      } else reject({ message: "error" });
    });

    getVideos.then((res) => {
      setItems(res);
    });
  }, []);

  return <Videos videos={items} />;
};
