export function sortFunction(toggleSort: boolean, orderBy: string) {
    if (toggleSort) return `${orderBy}`;
    return `-${orderBy}`;
  }