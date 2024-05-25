import {
  apiGetNhieQuestions,
  apiGetTodQuestions,
  apiGetWyrQuestions,
} from "@/services/questionServices";
import { useQuery } from "@tanstack/react-query";

export const useQuestionQuery = (type: string, category: string) => {
  const getTodQuestion = useQuery({
    queryKey: ["questions"],
    queryFn: () => {
      return apiGetTodQuestions(type, category);
    },
    enabled: !!type && (type === "truth" || type === "dare"),
  });
  const getNhieQuestion = useQuery({
    queryKey: ["questions", category],
    queryFn: () => {
      return apiGetNhieQuestions(category);
    },
    enabled: !!category,
  });
  const getWyrQuestion = useQuery({
    queryKey: ["questions", category],
    queryFn: () => {
      return apiGetWyrQuestions(category);
    },
    enabled: !!category,
  });
  return { getTodQuestion, getNhieQuestion, getWyrQuestion };
};
