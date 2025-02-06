import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteRowBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBookingRow, isPending: isDeletingBooking } =
    useMutation({
      mutationFn: (bookingId) => deleteBooking(bookingId),
      onSuccess: () => {
        toast.success(`the booking deleted successfully`);
        queryClient.invalidateQueries(["bookings"]);
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  return { deleteBookingRow, isDeletingBooking };
}
