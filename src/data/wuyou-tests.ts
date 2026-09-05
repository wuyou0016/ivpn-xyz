// 本站对无忧链接的真实实测记录。
// 字段：provider（被测服务）、testDate（测试日期 YYYY-MM-DD）、packetLossPercent（丢包率%）、method（测试方式说明）
// 严禁在此文件中填入编造的数字——没有真实测试就保持空数组，页面会据此显示"暂无本站实测数据"。
export interface PacketLossTest {
  provider: string;
  testDate: string;
  packetLossPercent: number;
  method: string;
}

export const wuyouPacketLossTests: PacketLossTest[] = [];
