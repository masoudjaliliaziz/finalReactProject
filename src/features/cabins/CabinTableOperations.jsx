import React from "react";
import TableOparations from "./../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOparations>
      <Filter
        options={[
          { label: "All", value: "all" },
          { label: "No Discount", value: "no-discount" },
          { label: "With Discount", value: "with-discount" },
        ]}
        filterField={"discount"}
      />
      <SortBy
        options={[
          {
            label: "sort by name(A-Z)",
            value: "name-asd",
          },
          {
            label: "sort by name(Z-A)",
            value: "name-dasd",
          },
          {
            label: "sort by Price(low first)",
            value: "regularPrice-asd",
          },
          {
            label: "sort by Price(high first)",
            value: "regularPrice-dasd",
          },
          {
            label: "sort by capcity(low first)",
            value: "maxCapacity-asd",
          },
          {
            label: "sort by capcity(high first)",
            value: "regularPrice-dasd",
          },
          {
            label: "sort by dicount(low first)",
            value: "discount-asd",
          },
          {
            label: "sort by dicount(high first)",
            value: "discount-dasd",
          },
        ]}
      />
    </TableOparations>
  );
}

export default CabinTableOperations;
