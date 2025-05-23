import { useQueryClient } from "@tanstack/react-query";

import { apiLegalProfileFormModule } from "../api";
import { LegalProfileFormData } from "../validations";
import { useAxiosMutation } from "../../../configs/useAxiosMutation";
import { useUserProfile } from "../../../shared/permissions/hooks";
import { LegalProfileResponseData } from "../../../shared/interfaces";
import { showApiError } from "../../../shared/utils";

interface LegalProfileMutationProps {
  onSuccessCallback?: (response: LegalProfileResponseData) => void;
}

export const usePatchLegalProfileMutation = ({
  onSuccessCallback,
}: LegalProfileMutationProps) => {
  const queryClient = useQueryClient();
  const profile = useUserProfile();
  return useAxiosMutation({
    mutationFn: ({ data, id }: { data: LegalProfileFormData; id: string }) =>
      apiLegalProfileFormModule.patchLegalProfile(data, id),
    onSuccess: (response) => {
      if (onSuccessCallback) onSuccessCallback(response);
      queryClient.invalidateQueries({
        queryKey: ["get-all-legal-profiles-of-user", profile?.id],
      });
      return response;
    },
    onError: (error) => {
      showApiError(error);
      return error;
    },
  });
};
