import { getRequest } from "./ApiHelper";
import {
  TOD_QUESTIONS,
  NHIE_QUESTIONS,
  WYR_QUESTIONS,
} from "@/constants/ApiConstants";

export const apiGetTodQuestions = async (type: string, category: string) => {
  const response = await getRequest(`${TOD_QUESTIONS}${type}/${category}`);
  return response;
};

export const apiGetNhieQuestions = async (category: string) => {
  const response = await getRequest(`${NHIE_QUESTIONS}${category}`);
  return response;
};

export const apiGetWyrQuestions = async (category: string) => {
  const response = await getRequest(`${WYR_QUESTIONS}${category}`);
  return response;
};
