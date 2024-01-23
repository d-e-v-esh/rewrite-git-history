const parseGitRebaseInput = (
  input: string
): Array<{
  hash: string;
  command: string;
  commitMessage: string;
  dateAndTime: Date;
}> => {
  const lines = input.trim().split("\n");
  const result: Array<{
    hash: string;
    command: string;
    commitMessage: string;
    dateAndTime: Date;
  }> = [];

  for (const line of lines) {
    const [command, hash, ...commitMessageParts] = line.split(" ");
    const commitMessage = commitMessageParts.join(" ");
    result.push({
      hash,
      command,
      commitMessage,
      dateAndTime: new Date(),
    });
  }

  return result;
};
export default parseGitRebaseInput;
