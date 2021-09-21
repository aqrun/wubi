
export interface PartBlock {
  /** 序号 11 */
  id: number;
  /** 名称 G */
  name: string;
  /** 中文键名 四次键入 */
  cnName: string;
  /** 起笔标记 一、二、三 */
  signId?: string;
  signColor?: string;
  signBorder?: boolean;
  blockColor?: string;
  parts?: PartItem[];
}

export interface PartItem {
  /** wordroot 对应序号 */
  id: string;
  /** 是否显示为小字 */
  isSub?: boolean;
  x: number;
  y: number;
}


export interface WordRoot {
  /** 标记 */
  sign: String,
  /** 例字 */
  sample_word: String,
  /** 字根编码 */
  id: String,
  /** 例字 unicode */
  sample_unicode: String,
  /** 字根 unicode */
  unicode: String,
}
