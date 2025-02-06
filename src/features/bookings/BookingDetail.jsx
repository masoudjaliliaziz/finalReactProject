import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./hooks/useCabins";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteRowBooking } from "./hooks/useDeleteRowBooking";
import { HiTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading } = useBooking();
  const moveBack = useMoveBack();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBookingRow, isDeletingBooking } = useDeleteRowBooking();
  if (isLoading) return <Spinner />;
  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            <HiArrowDownOnSquare />
            Check In
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            disabled={isCheckingOut}
            onClick={() => {
              checkout(bookingId);
            }}
            icon={<HiArrowUpOnSquare />}
          >
            Check Out
          </Button>
        )}
        <Modal>
          <Modal.Open opens={"delete"}>
            <Button
              variations="danger"
              disabled={isDeletingBooking}
              icon={<HiTrash />}
            >
              Delete Booking
            </Button>
          </Modal.Open>

          <Modal.Window name={"delete"}>
            <ConfirmDelete
              onConfirm={() => {
                deleteBookingRow(bookingId, {
                  onSettled: navigate(-1),
                });
              }}
            />
          </Modal.Window>
        </Modal>

        <Button variations="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
