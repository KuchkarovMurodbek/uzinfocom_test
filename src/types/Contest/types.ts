export type TContest = {
  id: number;
  title: string;
  difficulty: number;
  difficultyTitle: string;
  solved: number;
  userInfo: {
    hasSolved: boolean;
    hasAttempted: boolean;
  };
  authorUsername: string;
  notSolved: number;
  attemptsCount: number;
  hasChecker: boolean;
  tags: {
    id: number;
    name: string;
  }[];
  hasSolution: boolean;
  solutionKepcoinValue: number;
  likesCount: number;
  dislikesCount: number;
  hidden: boolean;
};
