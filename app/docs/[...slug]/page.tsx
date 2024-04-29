import React from "react";

const page = ({ params }: { params: { slug: String[] } }) => {
  if (params.slug.length == 2) {
    return (
      <h1>
        slug[0]-{params.slug[0]},slug[1]-{params.slug[1]}
      </h1>
    );
  } else if (params.slug.length == 1) {
    return <h1>slug[0]-{params.slug[0]}</h1>;
  }
  return <h1>docs folder</h1>;
};

export default page;
