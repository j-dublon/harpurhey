import { useEffect, useState } from "react";
import { getSinglePost } from "../contentful";

export default function useSinglePost(id) {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getSinglePost(id).then((result) => {
      setPost(result[0].fields);
      setLoading(false);
    });
  }, []);

  return [post, isLoading];
}
