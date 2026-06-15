import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

function parsePrefixes(prefixStr) {
  if (!prefixStr || prefixStr.trim() === '' || prefixStr.toLowerCase() === 'none') return []
  return prefixStr.split(',').map(p => p.trim()).filter(Boolean)
}

function parseBoolean(value) {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'on' || value.toLowerCase() === 'true' || value === '1'
  }
  return Boolean(value)
}

function parseLids(lidStr) {
  if (!lidStr || lidStr.trim() === '') return []
  return lidStr.split(',').map(l => l.trim()).filter(Boolean)
}

function parseMenuImages(menuImagesStr) {
  if (!menuImagesStr || menuImagesStr.trim() === '') return []
  return menuImagesStr.split(',').map(img => img.trim()).filter(Boolean)
}

const CONFIG = {
  MODE: process.env.MODE || 'public,
  PREFIXES: parsePrefixes(process.env.PREFIXES),
  PORT: parseInt(process.env.PORT) || 3000,
  SESSION: process.env.SESSION || eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJ4Y1JNNXNzVE5FMldVdlFIZmdUZkwwVUVQY1NET3dISThNSENNTlkxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQS93U1MwcmxpelB1Q3ZSemNJT0hrOVd2MUJMZ2hkUTJtc3M3cW03cXp6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRmVJNWlEUVVTYXFURXh3VnltMmJtMk1xQXZDaTFMczZuTkZYdjNwNTA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhck8zaTFkSG15Vy9KZWliWmNyL21UR2JKR0FUTUtFT3p3RlRlSlpCdTAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNMlhnV1Z5aW84TnRla00rS2lEQ3VIdEJuY3Q3aHc5Zm5UOHlpTVFDbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5MM1NPWEZ0YWY3R09rUHRQbHlCMXFBeWZicVNlQ0FsQnpZU1BoUVZjejQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xYTGc0T2llUHp1ajZIQzB1aVZsWmV0djBhTVhVMDdVUjBzYllPQW8zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXNSUlZyWmQ0Uk42ZmhCS21xb0xZRkNmNmRGcmlQRDVueUdkR3Bra09Rcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxIL25rQmZTYW13bFozVWZtZkQ3a1d0Y3g2ZVRTTDVhbWdscUdBZ3l5RzhPS1pSTm1ickI5R21udFh2QjNtZFJOczRoT2ZaZGFsbitYd254TXBlTGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiI4KzJXcURIQVpNdW1hdERmYTNwekwwQWlKdFlZVUh3WDZ0ekRpYWlLVHdFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBMlNITk1LQiIsIm1lIjp7ImlkIjoiOTIzNzEyMTk2NTY1OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QmPCdkIDwnZCR8J2QgPCdkIwg8J2QivCdkIDwnZCZ8J2QjPCdkIgiLCJsaWQiOiIyMjg4MDIyMTkyNTc5NzY6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pHcW5Qc0RFTExmd2RFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZtSmFLZEZKVE5XaFJUMGdwMHc1bnhBNFR6cWZGTlA2ZkQwZFJNM0NPQm89IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVJMk0wamZDSVZUcUVNR0pXSEJoZ2Y3bDVqM3ZMTmpSZkVEbGExRzFFcThDZ2RwdlJNZjUwOVdYMnJNbkxUUFpSTi9mZWMwbkVJWk91Y0NwSjIrSERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5QWtCYTJ3LzlBV3lLRzdjR0hNU0lOd3lLQXRkWG8rajRlT3lCR2VaR09jMUJsckpsN2IrbC9zeEk1dEwvSkZsNk1CcFR6YkN1d0pMNng1SmUxdFdqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzcxMjE5NjU2NToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg1aVdpblJTVXpWb1VVOUlLZE1PWjhRT0U4Nm54VFQrbnc5SFVUTndqZ2EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lBZ2dGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MTU1OTIyMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFb3YifQ==,
  TZ: process.env.TZ || 'Africa/Nairobi',
  ANTICALL: parseBoolean(process.env.ANTICALL || 'on'),
  ANTIDELETE: parseBoolean(process.env.ANTIDELETE || 'on'),
  ANTIEDIT: parseBoolean(process.env.ANTIEDIT || 'on'),
  AUTO_READ: parseBoolean(process.env.AUTO_READ || 'off'),
  AUTO_VIEW: parseBoolean(process.env.AUTO_VIEW || 'on'),
  AUTO_LIKE: parseBoolean(process.env.AUTO_LIKE || 'on'),
  DM_PRESENCE: process.env.DM_PRESENCE || '',
  GRP_PRESENCE: process.env.GRP_PRESENCE || '',
  USER_LID: parseLids(process.env.USER_LID || ''),
  OWNER_NUMBER: process.env.OWNER_NUMBER || '+923712196565',
  OWNER_NAME: process.env.OWNER_NAME || 'YARAM MD user',
  BOT_NAME: process.env.BOT_NAME || 'YARAM-Md-V3',
  BOT_VERSION: process.env.BOT_VERSION || '3.0.0',
  MENU_IMAGES: parseMenuImages(process.env.MENU_IMAGES || 'https://files.catbox.moe/nc4jsv.jpg')
}

export default CONFIG
