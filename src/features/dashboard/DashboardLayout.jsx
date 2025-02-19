import styled from "styled-components";
import { useRecentBookings } from "./hooks/useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./hooks/useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isPending: isPending1 } = useRecentBookings();
  const { isPending: isPending2, stays, confirmedStays } = useRecentStays();
  if (isPending1 || isPending2) return <Spinner />;
  console.log(confirmedStays);

  return (
    <StyledDashboardLayout>
      <div>statistics</div>
      <div>todays Activity</div>
      <div>chart</div>
      <div>chart 2</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
