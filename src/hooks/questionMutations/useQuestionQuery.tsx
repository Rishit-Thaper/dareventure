import { queryOptions } from "@/constants/ExtraConstants";
import {
  apiGetNhieQuestions,
  apiGetTodQuestions,
  apiGetWyrQuestions,
} from "@/services/questionServices";
import { useQuery } from "@tanstack/react-query";

export const useQuestionQuery = (type: string, category: string) => {
  const getTodQuestion = useQuery({
    queryKey: ["questions", type, category],
    queryFn: () => {
      return apiGetTodQuestions(type, category);
    },
    enabled: !!type && (type === "truth" || type === "dare"),
    ...queryOptions,
  });
  const getNhieQuestion = useQuery({
    queryKey: ["questions", "nhie", category],
    queryFn: () => {
      return apiGetNhieQuestions(category);
    },
    enabled: !!category,
    ...queryOptions,
  });
  const getWyrQuestion = useQuery({
    queryKey: ["questions", "wyr", category],
    queryFn: () => {
      return apiGetWyrQuestions(category);
    },
    enabled: !!category,
    ...queryOptions,
  });
  return { getTodQuestion, getNhieQuestion, getWyrQuestion };
};
