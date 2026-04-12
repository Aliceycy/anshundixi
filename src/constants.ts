import guanyuImg from './assets/关羽.svg';
import zhangfeiImg from './assets/张飞.svg';
import caocaoImg from './assets/曹操.svg';
import muguiyingImg from './assets/穆桂英.svg';
import fanlihuaImg from './assets/樊梨花.svg';
import shetaijunImg from './assets/佘太君.svg';

import guanyuAudio from './assets/关羽combine_1.mp3';
import zhangfeiAudio from './assets/张飞combine_2.mp3';
import caocaoAudio from './assets/曹操combine_2.mp3';
import muguiyingAudio from './assets/穆桂英combine_1.mp3';
import fanlihuaAudio from './assets/樊梨花combine_1.mp3';
import shetaijunAudio from './assets/佘太君combine_2.mp3';

export interface Character {
  id: string;
  name: string;
  modernText: string;
  traditionalText: string;
  description: string;
  background: string;
  keywords: string[];
  image: string;
  audio: string;
  color: string;
}

export const CHARACTERS: Character[] = [
  {
    id: 'guanyu',
    name: '关羽',
    modernText: '“这一次，我讲原则，不讲情面。”',
    traditionalText: '“赤面丹心扶汉室，青龙偃月定乾坤”',
    description: '重情重义，坚守原则，有底线',
    background: '三国蜀汉名将，被尊为“武圣”。一生重义守信，忠于承诺，是中国传统文化中“义”的象征。戏曲中以红脸表现其忠诚与正直。',
    keywords: ['忠义', '克制', '坚定'],
    image: guanyuImg,
    audio: guanyuAudio,
    color: '#ef4444', // Red
  },
  {
    id: 'zhangfei',
    name: '张飞',
    modernText: '“别忍了，该翻脸就翻脸。”',
    traditionalText: '“黑面怒吼震山川，一声断喝裂苍天”',
    description: '情绪直接，爆发力强，敢怒敢言',
    background: '三国蜀汉名将，以勇猛著称，性烈如火。在战场上冲锋在前，一声怒喝足以震慑敌军。戏曲中以黑脸呈现，象征刚直与力量。',
    keywords: ['爆发', '直接', '无所畏惧'],
    image: zhangfeiImg,
    audio: zhangfeiAudio,
    color: '#1f2937', // Black/Dark Gray
  },
  {
    id: 'caocao',
    name: '曹操',
    modernText: '“有点意思。”',
    traditionalText: '“白面含笑观人局，一步先机定胜天”',
    description: '冷静理性，善于判断，掌控局势',
    background: '三国时期政治家、军事家，精于谋略，擅长把握时机与人心。在戏曲中以白脸呈现，象征复杂、深思与权谋。',
    keywords: ['克制', '洞察', '掌控'],
    image: caocaoImg,
    audio: caocaoAudio,
    color: '#f97316', // Orange
  },
  {
    id: 'muguiying',
    name: '穆桂英',
    modernText: '“别等准备好，先上再说。”',
    traditionalText: '“凤盔红甲临阵起，一令千军破敌关”',
    description: '果断行动，执行力强，不拖延',
    background: '杨家将女将，巾帼英雄代表。临阵果决，指挥有度，多次带兵破敌。形象代表着行动力与担当。',
    keywords: ['果断', '行动', '带领'],
    image: muguiyingImg,
    audio: muguiyingAudio,
    color: '#a855f7', // Purple
  },
  {
    id: 'fanlihua',
    name: '樊梨花',
    modernText: '“卡住了？那就换个办法赢。”',
    traditionalText: '“梨花点将开新局，一念翻盘定输赢”',
    description: '灵活机变，思路清晰，善于破局',
    background: '民间传说中的女将，智勇兼备，擅长破阵解局。她的故事常与逆转局势、以智取胜相关。',
    keywords: ['灵动', '破局', '策略'],
    image: fanlihuaImg,
    audio: fanlihuaAudio,
    color: '#3b82f6', // Blue
  },
  {
    id: 'shetaijun',
    name: '佘太君',
    modernText: '“别上头，事情才会对。”',
    traditionalText: '“白发从容观世局，不动声色定人心”',
    description: '沉稳克制，经验丰富，内心坚定',
    background: '杨家将核心人物，历经战乱与家族兴衰，以沉稳与智慧统领全局。在戏曲中常作为稳定军心的关键角色。',
    keywords: ['沉稳', '通透', '定局'],
    image: shetaijunImg,
    audio: shetaijunAudio,
    color: '#22c55e', // Green
  },
];
