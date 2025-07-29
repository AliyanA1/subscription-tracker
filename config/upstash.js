import { Client as Workflow } from "@upstash/workflow";
import { QSTASH_TOKEN, QSTASH_URL } from "./envConfig.js";

export const workFlowClient=new Workflow({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN
});