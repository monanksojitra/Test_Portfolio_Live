import React from "react";
import InfoCard from "./InfoCard";



const Details = () => {
  const data = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/5b9a/f21e/693becda7743ff5677c6a9995f82011d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P-6VAAfmK-ZwcmNyjxRK0Uxjz-W1s8So-V25~51OximoVGKAPrI0Hgj8ggSDQMLN6uYDIn7qHltA5FBxNMSQhmIRD5arzb~mxnC3V4sNKvtsMSNgUm-~1WnWMCkxtI2Gzs5vRpM1FW0z1Dsrs3ugSk32kNmtGky2~0ZVtqRcC3g67T-s0tCjZYf2G-h9-FhzKhh-~5OOxod-~W~cr7NDlRBZdmZiavZoYr2oa~1XN-26CzoOsuAb3t4o39ZxLdtXMygf46zU84JSydqSOOaKjNVn9HCn91dIJLsq2tYSqlremOkZpe8ByIdsFJ1-VFSfqPvXnRL-LWfIdESr7jH37g__",
      titel1: "We have been improving our product",
      titel2: " for many years.",
      subtitel:
        "A good example of a paragraph contains a topic conclusion.'There are many different kinds of animals that live in China.",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/f9ac/438e/01b919ea60953ff6906253308bc8860c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3MBFOjv1TeGXcTYcITk3Q3-9wCWGCjrdQ3K4vb3ylzNbtqcZpwAR7RUI3ptD3Zl0nr-IJyIKuLrqvJ9-AY0wtI0bhJSgxT1XhjIZqDX1PTpRXajGBsVPll9MFlOsIXvBSVDCIykx15ZRU5PuZvklTGkQLuikHra0SyVKj6XV5B4LUQj2UEqDXGbMbmyyV8nQi30Sc~yN4bfQFn8Mi8-ymoF2l5v8K-jj1UcDZUZQsS9athPL2GtY90~9XAuCPDvJ~OpeST7yBOkliLfOxbOXFLAkX8zHpYEh30pMEkmZ8cdiw6gDI47yFXchERloye482OgoDB2ziN6Rw5zBUc80w__",
      titel1: "You can Practice at any",
      titel2: "time convinent for you.",
      subtitel:
        "A good example of a paragraph contains a topic conclusion.'There are many different kinds of animals that live in China.",
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <InfoCard data={item} />
      ))}
    </div>
  );
};

export default Details;
