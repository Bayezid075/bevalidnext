import React from "react";
import Navbar from "@/components/Navbar";
import Imageholder from "@/components/Imageholder";
import Textholder from "@/components/Textholder";
export default function page() {
  return (
    <div>
      <Navbar />
      <h1> Hi , It's BeValid </h1>
      <Imageholder />
      <Textholder />
    </div>
  );
}
