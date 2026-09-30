"use client";

import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

type Post = {
  id: string | number;
  title: string;
  content: any;
};

export default function Projects() {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    async function getProjects() {
      const { data, error } = await supabase.from("post").select("*");

      if (error) {
        console.error(error);
        return;
      }

      setPost(data);
    }

    getProjects();
  }, []);

  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>{post.content.cont1}</div>
      ))}
    </div>
  );
}
