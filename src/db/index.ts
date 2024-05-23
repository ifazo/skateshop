import { env } from "@/env.js"
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(env.DATABASE_URL!);

import * as schema from "./schema"

export const db = drizzle(sql, { schema })
