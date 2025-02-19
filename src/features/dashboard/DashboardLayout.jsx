import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
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
