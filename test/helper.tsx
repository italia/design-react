/**
 * Useful function to check when an error/deprecation log is printed
 * Wraps your component mount/render call with this to test for logs
 * @param fn testing function
 * @param messageToFilter specific message to check (can be partial). When omitted the log call is checked
 * @returns function result
 */
export function muteConsoleWithCheck(
  fn: Function,
  messageToFilter: string | RegExp = ''
) {
  const originalError = console.error;
  console.error = jest.fn();

  const result = fn();

  if (messageToFilter) {
    expect(console.error).toHaveBeenCalledWith(
      expect.stringMatching(messageToFilter),
      undefined
    );
  } else {
    expect(console.error).toHaveBeenCalled();
  }
  console.error = originalError;
  return result;
}
