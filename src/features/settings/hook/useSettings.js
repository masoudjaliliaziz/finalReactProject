import React from "react";
import { getSettings } from "../../../services/apiSettings";
import { useQuery } from "@tanstack/react-query";

export function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, settings, error };
}
