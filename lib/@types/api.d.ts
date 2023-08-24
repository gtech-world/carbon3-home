//列表页公共参数
declare type Page  = {
  countId?: number;
  current: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: [];
  pages: number;
  searchCount?: boolean;
  size: number;
  total: number;
}