import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv"
dotenv.config()
//10 request per 20s
const ratelimit =new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(5,"60 s"),
});

export default ratelimit;