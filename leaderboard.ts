function getRankFromLeaderboard(
  leaderboard: number[],
  playerScore: number[]
): number[] {
  const leaderboardRank: { rank: number; score: number }[] = [];
  for (let i = 0; i < leaderboard.length; i++) {
    if (i === 0) {
      leaderboardRank.push({ score: leaderboard[i], rank: 1 });
      continue;
    }
    const rank =
      leaderboardRank[i - 1].rank +
      (leaderboard[i] === leaderboard[i - 1] ? 0 : 1);
    leaderboardRank.push({
      score: leaderboard[i],
      rank,
    });
  }

  const playerRank = playerScore.map((score) => {
    if (
      !leaderboard.includes(score) &&
      score < leaderboard[leaderboard.length - 1]
    )
      return leaderboardRank[leaderboardRank.length - 1].rank + 1;

    const index = leaderboard.findIndex((element) => element <= score);
    return leaderboardRank[index].rank;
  });

  return playerRank;
}
console.log(
  getRankFromLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
console.log(
  getRankFromLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);
