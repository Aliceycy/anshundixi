import guanyuImg from './assets/关羽.svg';
import zhangfeiImg from './assets/张飞.svg';
import caocaoImg from './assets/曹操.svg';
import muguiyingImg from './assets/穆桂英.svg';
import fanlihuaImg from './assets/樊梨花.svg';
import shetaijunImg from './assets/佘太君.svg';

import guanyuAudio from './assets/关羽.mp3';
import zhangfeiAudio from './assets/张飞.mp3';
import caocaoAudio from './assets/曹操.mp3';
import muguiyingAudio from './assets/穆桂英.mp3';
import fanlihuaAudio from './assets/樊梨花.mp3';
import shetaijunAudio from './assets/佘太君.mp3';

export interface Character {
  id: string;
  name: string;
  modernText: string;
  traditionalText: string;
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
    image: guanyuImg,
    audio: guanyuAudio,
    color: '#ef4444', // Red
  },
  {
    id: 'zhangfei',
    name: '张飞',
    modernText: '“别忍了，该翻脸就翻脸。”',
    traditionalText: '“黑面怒吼震山川，一声断喝裂苍天”',
    image: zhangfeiImg,
    audio: zhangfeiAudio,
    color: '#1f2937', // Black/Dark Gray
  },
  {
    id: 'caocao',
    name: '曹操',
    modernText: '“有点意思。”',
    traditionalText: '“白面含笑观人局，一步先机定胜天”',
    image: caocaoImg,
    audio: caocaoAudio,
    color: '#f97316', // Orange
  },
  {
    id: 'muguiying',
    name: '穆桂英',
    modernText: '“别等准备好，先上再说。”',
    traditionalText: '“凤盔红甲临阵起，一令千军破敌关”',
    image: muguiyingImg,
    audio: muguiyingAudio,
    color: '#a855f7', // Purple
  },
  {
    id: 'fanlihua',
    name: '樊梨花',
    modernText: '“卡住了？那就换个办法赢。”',
    traditionalText: '“梨花点将开新局，一念翻盘定输赢”',
    image: fanlihuaImg,
    audio: fanlihuaAudio,
    color: '#3b82f6', // Blue
  },
  {
    id: 'shetaijun',
    name: '佘太君',
    modernText: '“别上头，事情才会对。”',
    traditionalText: '“白发从容观世局，不动声色定人心”',
    image: shetaijunImg,
    audio: shetaijunAudio,
    color: '#22c55e', // Green
  },
];
