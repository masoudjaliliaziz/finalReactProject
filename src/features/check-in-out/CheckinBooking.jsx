import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import CheckBox from "./../../ui/Checkbox";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/hooks/useCabins";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/hook/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const { booking, isLoading } = useBooking();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [haveBreakfast, setHaveBreakfast] = useState(false);
  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking]);
  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();
  const { isLoading: isLoadingSetting, settings } = useSettings();

  if (isLoading || isLoadingSetting) return <Spinner />;
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;
  const optionalPaidBreakgfast =
    settings.breakfastPrice * numNights * numGuests;
  function handleCheckin() {
    if (!confirmPaid) return;

    if (haveBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          extraPrice: optionalPaidBreakgfast,
          totalPrice: optionalPaidBreakgfast + totalPrice,
          hasBreakfast: true,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <CheckBox
            checked={haveBreakfast}
            onChange={() => {
              setHaveBreakfast((breakfast) => !breakfast);
              setConfirmPaid(false);
            }}
            id={"breakfast"}
          >
            Do you want have breackfast with price{" "}
            {formatCurrency(optionalPaidBreakgfast)}
          </CheckBox>
        </Box>
      )}
      <Box>
        <CheckBox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id={"confirm"}
        >
          I confirm that {guests.fullName} has paid the toatal amount of{" "}
          {!haveBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalPaidBreakgfast
              )} (${formatCurrency(totalPrice)}+${formatCurrency(
                optionalPaidBreakgfast
              )})`}
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button disabled={!confirmPaid || isCheckingIn} onClick={handleCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
