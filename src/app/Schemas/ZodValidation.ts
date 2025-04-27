import { z } from "zod";


export const formSchema = z.object({
  rank: z.number().min(1, "Rank cannot be less than 0"),
  percentile: z.number().min(0, "Percentile cannot be less than 0").max(100, "Percentile cannot be more than 100"),
  score: z.number().min(0, "Score cannot be less than 0").max(15, "Score cannot be more than 15"),
});


export type FormSchemaType = z.infer<typeof formSchema>;