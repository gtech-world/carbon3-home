declare namespace SbtTokenController {
  type Records = {
    records: {
      uuid: string;
      tokenId: number;
      loadName: string;
      proofTime: string;
      verifyUserName: string;
      tokenUrl: string;
    }[];
  };
  interface TagList {
    uuid: string; //标签编号
    productName: string; //产品型号
    loadNumber: string; //产品唯一标识符 productUuid(暂无后期会加)
    orgName: string; //标签申请主体
    evaluationType: string; //评价类型
    evaluationAgency: string; // 评价机构
    tokenId: number; //区块链SBT证书编号
    functionalUnit?: string; //功能单位
    evaluationBoundary?: string; //评价边界
    evaluationBasis?: string; //评价依据
    evaluationExpireTime?: string; //评价有效期
    pcfResult?: string; //二氧化碳等效排放
  }

  interface TransferEvent {
    id: number;
    chainId: number;
    contractAddress: string;
    blockNumber: number;
    txHash: string;
    logIndex: number;
    fromAddress: string;
    toAddress: string;
    fromTokenId: number;
    toTokenId: number;
    eventType: number;
    blockTimestamp: number;
    createTime: string;
    updateTime: string;
  }

  interface SbtNftList {
    tokenId: number;
    uuid: string;
    loadNumber: string;
    orgName: string;
    ownerAddress: string;
    productName: string;
    productUuid: string;
    labelCredential: string;
    pcfResult: string;
    proofTime: string;
    transferEvents: TransferEvent[];
  }
}
