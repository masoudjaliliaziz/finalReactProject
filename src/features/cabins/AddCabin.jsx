import React, { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens={"cabinCreate"}>
          <Button>Add new cabin</Button>
        </Modal.Open>

        <Modal.Window name={"cabinCreate"}>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddCabin;
