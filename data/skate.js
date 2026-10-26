// All site content lives here as plain JavaScript.
// The JSDoc comments give the TypeScript components their types; they don't affect runtime.

/** @typedef {'/' | '/tricks' | '/progress' | '/map'} Route */
/** @typedef {'Beginner' | 'Intermediate' | 'Advanced'} Level */
/** @typedef {'Street' | 'Transition' | 'Freestyle'} Style */
/** @typedef {{ name: string, level: Level, style: Style, note: string, time: string }} Trick */
/** @typedef {{ id: number, name: string, type: string, x: number, y: number }} Spot */

// ─── Navigation ──────────────────────────────────────────────────────────────

/** @type {{ label: string, href: Route }[]} */
export const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'TRICKS', href: '/tricks' },
  { label: 'PROGRESS', href: '/progress' },
  { label: 'SKATE MAP', href: '/map' },
]

// ─── Home ────────────────────────────────────────────────────────────────────

export const HOME_BACKGROUNDS = [
  { url: 'https://images.unsplash.com/photo-1763044938341-1b0cf685095c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800', credit: 'Juan Pablo' },
  { url: 'https://images.unsplash.com/photo-1517124792960-0f4701b9bd20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800', credit: 'Alexander Londoño' },
  { url: 'https://images.unsplash.com/photo-1522602398-e378288fe36d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800', credit: 'Inés Álvarez Fdez' },
  { url: 'https://images.unsplash.com/photo-1569073713037-e0f6158e3df1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800', credit: 'Taylor Smith' },
  { url: 'https://images.unsplash.com/photo-1573396948946-d1c47fc312e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800', credit: 'David Cain' },
  { url: 'https://images.unsplash.com/photo-1554200854-3f805c6c4fbd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800', credit: 'Jan Kopřiva' },
  { url: 'https://images.unsplash.com/photo-1510552857913-0a27715a102f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800', credit: 'j' },
]

// ─── Tricks ──────────────────────────────────────────────────────────────────

/** @type {('All' | Level)[]} */
export const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced']

/** @type {('All' | Style)[]} */
export const STYLES = ['All', 'Street', 'Transition', 'Freestyle']

/** @type {Trick[]} */
export const TRICKS = [
  { name: 'Ollie', level: 'Beginner', style: 'Street', note: 'The foundation. Pop, slide, level out.', time: '10 min' },
  { name: 'Kickturn', level: 'Beginner', style: 'Transition', note: 'Shift your weight and redirect with control.', time: '8 min' },
  { name: 'Manual', level: 'Beginner', style: 'Freestyle', note: 'Find your balance point over the back truck.', time: '12 min' },
  { name: 'Frontside 180', level: 'Intermediate', style: 'Street', note: 'Lead with your shoulders and land switch.', time: '18 min' },
  { name: 'Rock to Fakie', level: 'Intermediate', style: 'Transition', note: 'Commit over the coping, then roll back clean.', time: '15 min' },
  { name: 'Varial Flip', level: 'Intermediate', style: 'Freestyle', note: 'Combine a pop shove-it with a kickflip flick.', time: '25 min' },
  { name: 'Tre Flip', level: 'Advanced', style: 'Street', note: 'Scoop hard, flick lightly, catch with the front foot.', time: '30 min' },
  { name: 'Backside Air', level: 'Advanced', style: 'Transition', note: 'Carve high, grab, and stay centered over the board.', time: '35 min' },
  { name: 'Casper Flip', level: 'Advanced', style: 'Freestyle', note: 'Catch upside down and use the back foot to return.', time: '30 min' },
]

// ─── Progress ────────────────────────────────────────────────────────────────

export const ACTIVITIES = ['Push & stop with control', 'Land 10 rolling ollies', 'Hold a manual for 3 seconds', 'Land a frontside 180']

/** Which activities start ticked for a new visitor (same order as ACTIVITIES). */
export const DEFAULT_DONE = [true, true, false, false]

export const SESSION = [
  { item: 'WARM UP', time: '5 min' },
  { item: 'OLLIE REPS', time: '10 min' },
  { item: 'FRONTSIDE 180', time: '10 min' },
  { item: 'FREE SKATE', time: '5 min' },
]

export const STAGES = ['FIRST PUSH', 'BOARD CONTROL', 'STREET BASICS', 'TRICK BUILDER', 'ALL TERRAIN']

// ─── Skate map ───────────────────────────────────────────────────────────────

/** @type {Spot[]} */
export const INITIAL_SPOTS = [
  { id: 1, name: 'Noord Plaza', type: 'SKATEPARK', x: 23, y: 34 },
  { id: 2, name: 'Canal Ledge', type: 'STREET', x: 68, y: 58 },
  { id: 3, name: 'West Bowl', type: 'BOWL', x: 43, y: 76 },
]
