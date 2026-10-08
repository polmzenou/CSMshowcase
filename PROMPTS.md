# Prompts images — Public Safety Studio

7 images à générer (ChatGPT / OpenAI image). Dépose-les dans `public/images/` avec **exactement** ces noms.
Tant qu'une image manque, le site affiche un cadre « storyboard » à sa place.

| Fichier | Format | Fond | Utilisée dans |
|---|---|---|---|
| `hero.jpg` | 1536×1024 (paysage) | scène complète | 01 Hero |
| `denji.png` | 1024×1536 (portrait) | **transparent** | 02 Freefall, services, galerie |
| `power.png` | 1024×1536 (portrait) | **transparent** | 03 Impact, services, galerie |
| `aki.png` | 1024×1536 (portrait) | **transparent** | services, galerie |
| `pochita.png` | 1024×1024 (carré) | **transparent** | services, galerie, footer |
| `makima.jpg` | 1024×1536 (portrait) | scène complète | 07 Control, galerie (bandeau yeux) |
| `cut.jpg` | 1536×1024 (paysage) | scène complète | 04 Cut (éclats de verre) |

Les prompts décrivent les personnages sans les nommer : les générateurs refusent souvent les noms de personnages protégés.

---

## 1. hero.jpg
```
Japanese manga ink illustration, wide cinematic 3:2 landscape. A dark, gothic throne room. In the exact center, a tall, pale, narrow throne whose backrest rises into a sharp spire. Seated on it, a menacing figure whose head is a chainsaw (a long chainsaw blade bursting out of the forehead, jagged shark-tooth grin, small glowing red eyes), chainsaw blades emerging from both forearms resting on the armrests, white shirt and black tie. Above the spire floats a symbol made of three crossed chainsaw blades forming a star. Heavy chains hang from the throne. The floor is flat off-white paper with fine black perspective hatching lines converging toward the throne; a pool of black ink spreads across the floor from the throne like a cloak. Background: deep black with a faint blood-red glow behind the throne. Bold black brush linework, screentone halftone shading, high contrast, limited palette: ink black, off-white #efeae2, blood red #c8102e. Symmetrical, monumental, lots of dark negative space at the bottom-left. No text, no watermark, no logo.
```

## 2. denji.png
```
Japanese manga ink illustration, full body, isolated character on a TRANSPARENT background (PNG, no backdrop, no floor, no shadow). A young devil hunter in his chainsaw-devil form: his head is a chainsaw — a long chainsaw blade bursting out of the forehead, jagged shark-tooth grin, tiny fierce eyes, small hoses on the sides of the head. Chainsaw blades erupting from both forearms. White shirt with rolled sleeves, black tie flying upward, black pants, black shoes, a starter pull-cord with a T-handle hanging from his chest. Dynamic pose: falling / leaping diagonally through the air, arms spread, one knee bent, motion and wind in the clothes. Bold black brush linework, screentone halftone shading, gritty ink splatters, palette limited to ink black, off-white #efeae2, gunmetal grey blades and small blood-red #c8102e accents. Clean silhouette with crisp edges. No text, no watermark.
```

## 3. power.png
```
Japanese manga ink illustration, full body, isolated character on a TRANSPARENT background (PNG, no backdrop, no floor). A wild, cocky young woman: long messy pale-blonde hair flowing in the wind, two small sharp blood-red horns on her head, wide shark-tooth grin, orange eyes with cross-shaped pupils. White shirt, black tie, dark open jacket, black pants. She swings an enormous scythe made of solidified blood over her head, lunging forward in an aggressive attack pose, blood drops flying off the blade. Bold black brush linework, screentone halftone shading, ink splatters, palette: ink black, off-white #efeae2, pale blonde, deep blood red #c8102e. Crisp clean silhouette. No text, no watermark.
```

## 4. aki.png
```
Japanese manga ink illustration, full body, isolated character on a TRANSPARENT background (PNG, no backdrop, no floor). A calm, serious young man with black hair tied in a small topknot at the back of his head, sharp tired eyes. Black suit, white shirt, thin black tie. Low crouching battle stance, mid-slash: both hands on a katana swung horizontally, a long white slash trail and speed lines following the blade. Bold black brush linework, screentone halftone shading, palette: ink black, off-white #efeae2, steel grey blade, small blood-red #c8102e accents. Crisp clean silhouette. No text, no watermark.
```

## 5. pochita.png
```
Japanese manga ink illustration with flat color, isolated on a TRANSPARENT background (PNG, no backdrop). A small, adorable round orange dog-like devil: chubby body, four stubby legs, big round shiny black eyes, tiny happy open mouth with small sharp teeth, a short chainsaw blade sticking straight up out of its forehead, and a tail that ends in a chainsaw pull-cord T-handle. Sitting happily, slightly tilted, cheerful. Thick black brush outlines, bright orange #ff6a13 body, off-white blade, light halftone shading. Cute and expressive. No text, no watermark.
```

## 6. makima.jpg
```
Japanese manga ink illustration, vertical portrait 2:3, chest-up, facing the viewer. A calm, beautiful, unsettling woman with long auburn-red hair, straight bangs, and a long braid falling over one shoulder. Her eyes are golden-yellow with concentric ring patterns around the pupils (hypnotic ringed eyes), looking directly at the viewer, faint knowing smile. White collared shirt, black tie, long dark coat. Her eyes sit in the upper third of the image. Background: deep black with a soft blood-red glow behind her head. Bold black brush linework, screentone halftone shading, palette: ink black, off-white #efeae2, red hair, golden eyes, blood red #c8102e glow. High contrast, cinematic, menacing serenity. No text, no watermark.
```

## 7. cut.jpg
```
Japanese manga ink illustration, wide cinematic 3:2 landscape. A dramatic shattered manga panel: a single katana slash cuts diagonally across the whole frame from bottom-left to top-right as a blinding white line, the image around it breaking into sharp glass-like shards. On the right side, a silhouette of a swordsman in a black suit finishing the slash, coat flying. Explosive ink splatters and speed lines. Background split between blood red #c8102e and ink black, with off-white #efeae2 highlights and screentone halftone texture. Keep the bottom-left area darker and emptier (text will be placed there). No text, no watermark.
```

---

### Astuces
- Si ChatGPT refuse la transparence : demande un **fond blanc uni**. Envoie-moi l'image, je retirerai le fond.
- Garde le même style d'une image à l'autre : génère-les dans la même conversation et ajoute « same style as the previous images ».
- Les images détourées ont une ombre portée noire automatique dans le site, d'où l'intérêt de bords nets.
