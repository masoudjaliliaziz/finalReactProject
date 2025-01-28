import React from "react";
import TableOparations from "./../../ui/TableOperations";
import Filter from "../../ui/Filter";
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
    </TableOparations>
  );
}

export default CabinTableOperations;
