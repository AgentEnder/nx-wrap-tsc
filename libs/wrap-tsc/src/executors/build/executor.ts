import { tscExecutor } from "@nrwl/js/src/executors/tsc/tsc.impl";
import { ExecutorOptions } from "@nrwl/js/src/utils/schema";

import { ExecutorContext } from "@nrwl/devkit";

export default async function* runExecutor(
    options: ExecutorOptions,
    context: ExecutorContext
) {
    const res = yield* tscExecutor(options, context);
    console.error(res);
    return res;
}
