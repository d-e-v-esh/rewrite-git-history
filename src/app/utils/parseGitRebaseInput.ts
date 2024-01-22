function parseGitRebaseInput(
  input: string
): Record<string, { command: string; commitMessage: string }> {
  const lines = input.trim().split("\n");
  const result: Record<string, { command: string; commitMessage: string }> = {};

  for (const line of lines) {
    const [command, commitHash, ...commitMessageParts] = line.split(" ");
    if (command && commitHash) {
      const commitMessage = commitMessageParts.join(" ");
      result[commitHash] = { command, commitMessage };
    }
  }

  return result;
}
