export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20
export const INITIAL_SPEED = 800 // 0.8秒に1マス落下に変更
export const KEY_REPEAT_DELAY = 50
export const SOFT_DROP_SPEED = 50
export const ANIMATION_SPEED = 1000 / 60

export const TETROMINOS = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: '#8be9fd',
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: '#f1fa8c',
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#bd93f9',
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#ffb86c',
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#ff79c6',
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    color: '#50fa7b',
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    color: '#ff5555',
  },
}

export type TetrominoType = keyof typeof TETROMINOS

// レベルごとの速度倍率を調整
export const LEVEL_SPEED_MULTIPLIER = 0.8 // より急激な速度上昇に変更
export const POINTS = {
  SOFT_DROP: 1, // 手動で下に移動
  HARD_DROP: 2, // ハードドロップ
  SINGLE: 100, // 1ライン消去
  DOUBLE: 300, // 2ライン消去
  TRIPLE: 500, // 3ライン消去
  TETRIS: 800, // 4ライン消去
  LEVEL_UP: 1000, // レベルアップボーナス
}

// レベルごとの必要スコア
export const LEVEL_REQUIREMENTS = [
  0, // Level 1
  1000, // Level 2
  3000, // Level 3
  6000, // Level 4
  10000, // Level 5
  15000, // Level 6
  21000, // Level 7
  28000, // Level 8
  36000, // Level 9
  45000, // Level 10
]
