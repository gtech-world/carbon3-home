export interface Site {
    name: string,
    displayName: string,
}

export interface UserData {
  id: number;
  apiKeyId: number;
  name: string;
  password: string;
  role: string;
  authLevel: number;
  lastLoginTime: string;
  createTime: string;
  updateTime: string;
  loginToken: string;
  organization: {
    id: number;
    name: string;
    imageUrl: string;
    displayName: string;
    type: string;
    sitList: Site[];
    createTime: string;
    updateTime: string;
  };
}
