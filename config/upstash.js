import { Client as Workflow } from "@upstash/qstash";
import { QSTASH_TOKEN, QSTASH_URL } from "./envConfig";

export default workFlowClient=new Workflow({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN
});