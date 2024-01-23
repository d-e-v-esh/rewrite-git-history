function convertJsonToGit(
  input: Array<{ hash: string; command: string; commitMessage: string }>
): string {
  return input
    .map((item) => `${item.command} ${item.hash} ${item.commitMessage}`)
    .join("\n");
}

export default convertJsonToGit;
