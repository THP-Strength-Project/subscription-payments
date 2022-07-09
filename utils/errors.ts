export async function asyncWrap<T>(promise: Promise<T>): Promise<{ error: Error | null; result: T | null }> {
  return promise
    .then((result) => ({
      error: null,
      result
    }))
    .catch((e: Error) => ({ error: e, result: null }))
}
