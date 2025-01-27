import React, { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {" "}
      <Button onClick={() => setShowForm((show) => !show)}>
        {showForm ? "close" : " Add new cabin"}
      </Button>
      {showForm && (
        <Modal
          onClose={() => {
            setShowForm((show) => !show);
          }}
        />
      )}
    </div>
  );
}

export default AddCabin;
