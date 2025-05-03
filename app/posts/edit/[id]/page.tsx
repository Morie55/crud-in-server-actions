import { getPostById } from "@/app/_actions/postActions";
import EditPost from "@/components/EditPost";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await getPostById(id);

  return (
    <div>
      <EditPost post={post} />
    </div>
  );
};

export default page;
