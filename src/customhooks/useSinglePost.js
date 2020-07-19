import { useEffect, useState } from "react";
import { getSinglePost } from "../contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function useSinglePost(id) {
  const [post, setPost] = useState(null);
  const [postBody, setPostBody] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const regex = /<\/p><p>/g;

  useEffect(() => {
    getSinglePost(id).then((result) => {
      setPost(result.items[0].fields);
      const rawRichTextField = result.items[0].fields.body;
      const renderedHTML = documentToHtmlString(rawRichTextField);
      setPostBody(renderedHTML.replace(regex, "</p><br><p>"));
      setLoading(false);
    });
  }, []);

  return [post, postBody, isLoading];
}
