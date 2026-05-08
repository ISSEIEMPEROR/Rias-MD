import axios from "axios";

const FANTOX = "https://fantox-apis.vercel.app";

const RIAS_QUOTES = [
  "Power without wisdom is a blade without a hilt.",
  "I protect what's mine. That includes you.",
  "In the Underworld, strength is respected. Show me yours.",
  "Every servant I choose has potential. Don't waste mine.",
  "A devil doesn't beg. We negotiate.",
  "Fufu~ Did you really think you could surprise me?",
  "My Power of Destruction doesn't care about your excuses.",
  "Gremory never abandons their own. Remember that.",
  "Even the weakest pawn can become a queen. Prove yourself.",
  "I am Rias Gremory. And I always protect what belongs to me.",
];

const RIAS_ROASTS = [
  "You fight like a low-class devil who hasn't even earned a piece set. Pathetic.",
  "Even Gasper's Sacred Gear has more resolve than you. And he's terrified of humans.",
  "If brains were a Sacred Gear, you'd be a Longinus user. Unfortunately, they're not.",
  "I've seen stray devils with more dignity. And they were being exorcised.",
  "Issei tripped over his own feet more gracefully than you handle your life.",
  "A pure-blooded devil, and this is what you present to me? Disappointing.",
  "My household rating game opponents gave me more trouble than you ever could.",
];

const RIAS_PEPS = [
  "You have more strength than you realize. A Gremory never gives up — neither should you.",
  "Every devil started weak. What matters is what you do with the power you're given.",
  "I see potential in you. Don't waste it on doubt.",
  "Even Issei doubted himself. Look at him now. You have the same fire — use it.",
  "The Underworld rewards those who keep pushing forward. Stand up.",
  "You are under my protection. That means you don't get to quit.",
  "Fufu~ I wouldn't keep you around if I didn't believe in you.",
];

const PEERAGE_RANKS = [
  { rank: "Pawn ♟️", comment: "A pawn — but pawns can become anything. Prove yourself." },
  { rank: "Knight ♞", comment: "Speed and skill. I expect swift results from you." },
  { rank: "Bishop ♝", comment: "Your magical talent is promising. Train harder." },
  { rank: "Rook ♜", comment: "Raw power. Channel it properly and you'll be unstoppable." },
  { rank: "Queen ♛", comment: "The most versatile piece. You could stand at my side someday." },
];

const CONTRACTS = [
  "I will grant your wish — in exchange for your unwavering loyalty to the Gremory clan. Do you accept?",
  "What is it you desire most? Speak it, and I shall consider granting it. But nothing is free.",
  "A contract with a devil is not taken lightly. Your wish, your price. State your terms.",
  "Fufu~ You seek a deal with me? How bold. Tell me what you want.",
  "The Gremory clan has never failed to fulfill a contract. What do you wish for?",
];

const POD_ATTACKS = [
  "🔴 *[ POWER OF DESTRUCTION ACTIVATED ]*\n\nRias raises her hand. A swirling crimson energy ball materializes, growing larger with each passing second...\n\n_\"Don't make me use this. ...Too late.\"_",
  "🔴 *[ EXTINGUISHED STAR ]*\n\nThe crimson energy explodes outward, disintegrating everything in its path.\n\n_\"This is the Gremory clan's power. Respect it.\"_",
  "🔴 *[ RUIN THE EXTINCT ]*\n\nRias's red hair flows as the power of destruction consumes the target entirely.\n\n_\"Fufu~ You brought this on yourself.\"_",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const FANTOX_ENDPOINTS = {
  maid: "maid",
  demon: "demon",
  vampire: "vampire",
  wings: "wings",
  ribbons: "ribbons",
  dress: "dress",
  horns: "horns",
};

const RIAS_PICS = [
  "https://images4.alphacoders.com/849/849720.jpg",
  "https://images4.alphacoders.com/855/855535.jpg",
  "https://images2.alphacoders.com/814/814604.jpg",
  "https://images6.alphacoders.com/786/786948.jpg",
  "https://images4.alphacoders.com/857/857390.jpg",
  "https://images3.alphacoders.com/786/786947.jpg",
];

let mergedCommands = [
  "rias",
  "riasquote",
  "riasroast",
  "riaspep",
  "riaspic",
  "riasask",
  "devilcontract",
  "peerage",
  "powerofdestruction",
  "maid",
  "demon",
  "vampire",
  "wings",
  "ribbons",
  "dress",
  "horns",
];

export default {
  name: "rias",
  alias: [...mergedCommands],
  uniquecommands: [
    "rias", "riasquote", "riasroast", "riaspep", "riaspic",
    "riasask", "devilcontract", "peerage", "powerofdestruction",
    "maid", "demon", "vampire", "wings", "ribbons", "dress", "horns",
  ],
  description: "Rias Gremory commands + FantoX anime images",

  start: async (Atlas, m, { text, args, prefix, inputCMD, doReact }) => {

    switch (inputCMD) {

      // ── -rias ─────────────────────────────────────
      case "rias": {
        await doReact("🔴");
        const menu = `🔴 *Rias Gremory Commands*\n\n` +
          `━━━━━━━━━━━━━━━━━\n` +
          `*Rias Personality*\n` +
          `• \`${prefix}riasquote\` — Random Rias quote\n` +
          `• \`${prefix}riasroast\` — Rias roasts you\n` +
          `• \`${prefix}riaspep\` — Rias gives you a pep talk\n` +
          `• \`${prefix}riaspic\` — Rias image\n` +
          `• \`${prefix}riasask <question>\` — Ask Rias anything (AI)\n` +
          `• \`${prefix}devilcontract\` — Rias offers you a contract\n` +
          `• \`${prefix}peerage\` — Get your peerage rank\n` +
          `• \`${prefix}powerofdestruction\` — Rias uses her power\n\n` +
          `*Anime Images (FantoX API)*\n` +
          `• \`${prefix}maid\` • \`${prefix}demon\` • \`${prefix}vampire\`\n` +
          `• \`${prefix}wings\` • \`${prefix}ribbons\` • \`${prefix}dress\` • \`${prefix}horns\`\n` +
          `━━━━━━━━━━━━━━━━━\n` +
          `_"Use them wisely, my servant."_ — Rias Gremory`;
        return Atlas.sendMessage(m.from, { text: menu }, { quoted: m });
      }

      // ── -riasquote ────────────────────────────────
      case "riasquote": {
        await doReact("🔴");
        return Atlas.sendMessage(m.from, {
          text: `🔴 _"${pick(RIAS_QUOTES)}"\n\n— Rias Gremory_`,
        }, { quoted: m });
      }

      // ── -riasroast ────────────────────────────────
      case "riasroast": {
        await doReact("😏");
        return Atlas.sendMessage(m.from, {
          text: `🔴 *Rias roasts you:*\n\n_"${pick(RIAS_ROASTS)}"_ 😏`,
        }, { quoted: m });
      }

      // ── -riaspep ──────────────────────────────────
      case "riaspep": {
        await doReact("💪");
        return Atlas.sendMessage(m.from, {
          text: `🔴 *Rias encourages you:*\n\n_"${pick(RIAS_PEPS)}"_ ♟️`,
        }, { quoted: m });
      }

      // ── -riaspic ──────────────────────────────────
      case "riaspic": {
        await doReact("🔴");
        try {
          await Atlas.sendMessage(m.from, {
            image: { url: pick(RIAS_PICS) },
            caption: `🔴 *Rias Gremory*\n_"Did you want to see me? Fufu~"_`,
          }, { quoted: m });
        } catch {
          await doReact("❌");
          m.reply("Couldn't fetch Rias image right now.");
        }
        break;
      }

      // ── -riasask (AI via Gemini) ───────────────────
      case "riasask": {
        if (!text) {
          await doReact("❌");
          return m.reply(`_"You called for me but said nothing? Speak up."_\n\nUsage: *${prefix}riasask <your question>*`);
        }
        const geminiKey = global.pickKey(global.geminiAPIKeys);
        if (!geminiKey) {
          await doReact("❌");
          return m.reply(`_"My magical channel to the Underworld is disrupted."_\n\nSet GEMINI_API in your environment variables.`);
        }
        await doReact("🔴");
        await Atlas.sendMessage(m.from, { text: `_"Hmm... let me consider this..."_` }, { quoted: m });
        try {
          const RIAS_PERSONA = `You are Rias Gremory from High School DxD. You are the heiress of the House of Gremory and the King of the Occult Research Club at Kuoh Academy. Stay completely in character. You are noble, graceful, and confident. Deeply protective of your peerage. Can be playful and teasing. Proud of being a pure-blooded Devil. Speak in a refined, slightly formal tone. Never use slang. Answer the user's question fully in character.`;
          const res = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
            { contents: [{ role: "user", parts: [{ text: `${RIAS_PERSONA}\n\nUser asks: ${text}` }] }] },
            { headers: { "Content-Type": "application/json" }, timeout: 15000 }
          );
          const reply = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || `_"I have no answer for that right now."_`;
          await Atlas.sendMessage(m.from, { text: `🔴 *Rias Gremory:*\n\n${reply}` }, { quoted: m });
        } catch (e) {
          await doReact("❌");
          m.reply(`_"Something disrupted my connection. Try again."_`);
        }
        break;
      }

      // ── -devilcontract ────────────────────────────
      case "devilcontract": {
        await doReact("📜");
        return Atlas.sendMessage(m.from, {
          text: `📜 *Devil Contract — Rias Gremory*\n\n_"${pick(CONTRACTS)}"_\n\nReply with your wish~`,
        }, { quoted: m });
      }

      // ── -peerage ──────────────────────────────────
      case "peerage": {
        await doReact("♟️");
        const p = pick(PEERAGE_RANKS);
        return Atlas.sendMessage(m.from, {
          text: `♟️ *Your Peerage Rank:*\n\n*${p.rank}*\n\n_"${p.comment}"_ — Rias Gremory`,
        }, { quoted: m });
      }

      // ── -powerofdestruction ───────────────────────
      case "powerofdestruction": {
        await doReact("🔴");
        return Atlas.sendMessage(m.from, { text: pick(POD_ATTACKS) }, { quoted: m });
      }

      // ── FantoX image commands ──────────────────────
      case "maid":
      case "demon":
      case "vampire":
      case "wings":
      case "ribbons":
      case "dress":
      case "horns": {
        await doReact("🎴");
        const endpoint = FANTOX_ENDPOINTS[inputCMD];
        const captions = {
          maid: "🍵 *Maid*",
          demon: "😈 *Demon*",
          vampire: "🧛 *Vampire*",
          wings: "🪽 *Wings*",
          ribbons: "🎀 *Ribbons*",
          dress: "👗 *Dress*",
          horns: "😈 *Horns*",
        };
        try {
          const res = await axios.get(`${FANTOX}/${endpoint}`, { timeout: 10000 });
          const imgUrl = res.data?.url || res.data?.image || res.data?.data;
          if (!imgUrl) throw new Error("No image URL returned");
          await Atlas.sendMessage(m.from, {
            image: { url: imgUrl },
            caption: `${captions[inputCMD]} — FantoX API`,
          }, { quoted: m });
        } catch {
          await doReact("❌");
          m.reply(`❌ FantoX API couldn't fetch *${inputCMD}* right now. Try again later.`);
        }
        break;
      }

      default:
        break;
    }
  },
};
