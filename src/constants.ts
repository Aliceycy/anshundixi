import guanyuImg from './assets/关羽.svg';
import zhangfeiImg from './assets/张飞.svg';
import caocaoImg from './assets/曹操.svg';
import muguiyingImg from './assets/穆桂英.svg';
import fanlihuaImg from './assets/樊梨花.svg';
import shetaijunImg from './assets/佘太君.svg';

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
    traditionalText: '“赤面丹心扶汉室，青龙在手定乾坤”',
    image: guanyuImg,
    audio: 'https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg', // Placeholder audio
    color: '#ef4444', // Red
  },
  {
    id: 'zhangfei',
    name: '张飞',
    modernText: '“别忍了，该翻脸就翻脸。”',
    traditionalText: '“黑面怒目震山河，一声断喝万人惊”',
    image: zhangfeiImg,
    audio: 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg', // Placeholder audio
    color: '#1f2937', // Black/Dark Gray
  },
  {
    id: 'caocao',
    name: '曹操',
    modernText: '“有点意思。”',
    traditionalText: '“白面藏锋谋天下，笑里藏刀定乾坤”',
    image: caocaoImg,
    audio: 'https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg', // Placeholder audio
    color: '#f97316', // Orange
  },
  {
    id: 'muguiying',
    name: '穆桂英',
    modernText: '“别等准备好，先上再说。”',
    traditionalText: '“凤盔红甲临阵起，一令三军听号行”',
    image: muguiyingImg,
    audio: 'https://actions.google.com/sounds/v1/alarms/mechanical_clock_ticking.ogg', // Placeholder audio
    color: '#a855f7', // Purple
  },
  {
    id: 'fanlihua',
    name: '樊梨花',
    modernText: '“卡住了？那就换个办法赢。”',
    traditionalText: '“梨花点将破迷阵，一念翻局定输赢”',
    image: fanlihuaImg,
    audio: 'https://actions.google.com/sounds/v1/alarms/phone_ring_loop.ogg', // Placeholder audio
    color: '#3b82f6', // Blue
  },
  {
    id: 'shetaijun',
    name: '佘太君',
    modernText: '“别上头，事情才会对。”',
    traditionalText: '“白发不随风浪起，静看人心自有声”',
    image: shetaijunImg,
    audio: 'https://actions.google.com/sounds/v1/alarms/alarm_clock_ringing_beeps.ogg', // Placeholder audio
    color: '#22c55e', // Green
  },
];
