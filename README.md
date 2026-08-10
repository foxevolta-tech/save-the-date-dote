# Save the Date — Cérémonie de Dot

Application web pour envoyer des invitations personnalisées (avec QR code)
à ~171 invités et contrôler leur entrée le jour de la cérémonie.

- **`/invite/[id]`** — affiche "Save the Date" personnalisée (nom, date,
  heure, lieu, QR code) pour un invité.
- **`/scan`** — page protégée par mot de passe pour scanner les QR codes à
  l'entrée (caméra du téléphone).
- **`/admin`** — tableau de bord protégé par mot de passe : statistiques,
  recherche, liens à copier, ajout d'invités, réinitialisation.

Construit avec Next.js 14 (App Router), la génération de QR codes via
`qrcode`, et la lecture de QR codes via `html5-qrcode`.

> **Votre affiche est déjà intégrée.** L'image envoyée (Christian & Justine,
> 16.8.2026) est dans `public/affiche.jpg` et référencée dans
> `lib/config.js` (`posterImageUrl: "/affiche.jpg"`). Elle s'affiche **telle
> quelle**, sans recadrage ni filtre — seuls le nom de l'invité et le QR
> code sont ajoutés dans un bandeau juste en dessous, avec un fond de la
> même couleur que le bas de l'affiche pour un raccord invisible. Pour la
> remplacer, déposez une nouvelle image au même endroit (même nom de
> fichier) ou changez le chemin dans `lib/config.js`.

---

## 1. Installation locale

```bash
npm install
cp .env.example .env
```

Ouvrez `.env` et définissez au minimum :

```
ADMIN_PASSWORD=un-mot-de-passe-fort
SCAN_PASSWORD=un-autre-mot-de-passe
```

Puis lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

Un fichier `data/guests.json` est **déjà fourni** avec 171 invités nommés
"Invité 1" à "Invité 171" et des identifiants uniques générés
aléatoirement — l'application est utilisable immédiatement pour tester le
flux complet (invitation → scan → admin).

---

## 2. Renseigner la vraie liste d'invités

### Option A — modifier le fichier directement
Ouvrez `data/guests.json` et remplacez chaque `"name"` par le vrai nom.
Ne touchez pas au champ `"id"` (c'est lui qui figure dans le lien et le QR
code déjà "attribué" à cette ligne).

### Option B — importer un CSV
Créez un fichier `noms.csv` (un nom complet par ligne, sans en-tête) :

```
Fatou Diarra
Ibrahim Koné
Mariam Traoré
```

Puis lancez :

```bash
npm run generate-guests -- noms.csv
```

Cela **ajoute** les invités manquants sans toucher à ceux déjà présents
(donc sans jamais changer l'identifiant d'un invité déjà envoyé).

### Régénérer 171 invités vierges
Supprimez `data/guests.json` puis relancez `npm run generate-guests`.

---

## 3. Personnaliser les informations de la cérémonie

Tout se passe dans **`lib/config.js`** :

```js
export const ceremony = {
  title: "Cérémonie de Dot",
  coupleNames: "Aïcha & Moussa",
  date: "Samedi 20 Décembre 2026",
  time: "10h00",
  venue: "Salle des Fêtes Le Jardin d'Émeraude",
  address: "Cocody, Abidjan, Côte d'Ivoire",
  message: "Veuillez présenter ce QR code à l'entrée de la cérémonie",
  posterImageUrl: "", // optionnel, voir ci-dessous
};
```

### Utiliser une vraie affiche (image personnalisée)
- Le plus simple : déposez votre image dans `public/` (ex :
  `public/affiche.jpg`) puis mettez `posterImageUrl: "/affiche.jpg"`.
- Ou hébergez l'image ailleurs (Cloudinary, Imgur…) et collez son URL
  complète (`https://...`).
- Si `posterImageUrl` reste vide, un fond illustré élégant (dégradé
  bordeaux + cadre doré) est utilisé par défaut — l'application reste donc
  belle et fonctionnelle sans image fournie.

Le QR code est automatiquement superposé en bas, centré, sur une carte
ivoire pour rester lisible quelle que soit l'image de fond.

---

## 4. Envoyer les invitations (WhatsApp)

Pour chaque invité, le lien à partager est :

```
https://votre-domaine.vercel.app/invite/{id}
```

Depuis `/admin`, cliquez sur **"Copier le lien"** en face de chaque nom
pour l'envoyer directement sur WhatsApp. La page d'invitation est conçue
mobile-first et s'affiche bien dans les aperçus de lien WhatsApp.

---

## 5. Le jour J — scanner les entrées

1. Allez sur `https://votre-domaine.vercel.app/scan` depuis le téléphone
   qui contrôle l'entrée.
2. Entrez le `SCAN_PASSWORD`.
3. Autorisez l'accès à la caméra.
4. Chaque QR scanné affiche immédiatement un écran plein écran :
   - 🟢 **Invitation valide** + nom de l'invité
   - 🟠 **Déjà scanné** + heure du premier passage
   - 🔴 **Invitation invalide**
5. Appuyez sur **"Scanner suivant"** pour continuer.

Vous pouvez utiliser plusieurs téléphones en même temps sur plusieurs
entrées : voir la section suivante pour que les statuts restent synchronisés
entre eux.

---

## 6. Déploiement sur Vercel

1. Poussez ce projet sur GitHub.
2. Sur [vercel.com](https://vercel.com), "New Project" → importez le repo.
3. Dans **Project Settings → Environment Variables**, ajoutez :
   - `ADMIN_PASSWORD`
   - `SCAN_PASSWORD`
   - `NEXT_PUBLIC_BASE_URL` (ex : `https://mon-projet.vercel.app`)
4. Déployez.

### ⚠️ Important : stockage des statuts d'entrée sur Vercel
Par défaut, l'application stocke la liste des invités dans le fichier
`data/guests.json`. Cela fonctionne très bien **en local** ou sur un
serveur classique toujours allumé. Sur Vercel, chaque requête peut être
traitée par une fonction serverless différente qui ne partage pas de
disque : avec plusieurs téléphones qui scannent en même temps, les statuts
"entré" risquent de ne pas rester synchronisés entre eux.

**Pour un contrôle d'entrée fiable le jour J sur Vercel**, créez une base
Redis gratuite (2 minutes) :

1. Sur votre projet Vercel → onglet **Storage** → **Create Database** →
   **Upstash Redis** (ou directement sur [upstash.com](https://upstash.com)).
2. Copiez les valeurs `UPSTASH_REDIS_REST_URL` et
   `UPSTASH_REDIS_REST_TOKEN` fournies dans **Environment Variables**.
3. Redéployez. L'application bascule automatiquement en stockage Redis
   dès que ces deux variables sont présentes (voir `lib/store.js`), et
   recopie une seule fois le contenu de `data/guests.json` au démarrage.

Sans ces variables, l'application continue de fonctionner (mode fichier
JSON), ce qui reste tout à fait suffisant pour des tests ou un événement
avec un seul point de contrôle.

---

## 7. Répétition avant le jour J

Le bouton **"Réinitialiser toutes les entrées"** dans `/admin` remet tous
les invités à "non entré" sans changer les identifiants ni les liens déjà
envoyés — pratique pour tester le scan en conditions réelles puis repartir
propre.

---

## 8. Structure du projet

```
app/
  invite/[id]/page.js      Page d'invitation personnalisée
  scan/                    Scanner QR (protégé par mot de passe)
  admin/                   Tableau de bord (protégé par mot de passe)
  api/
    guests/                Liste + ajout d'invités (admin)
    guests/[id]/           Infos publiques d'un invité (pour la page invite)
    scan/                  Validation d'entrée après scan
    qrcode/[id]/           Génération de l'image QR code (PNG)
    admin/auth/            Vérification des mots de passe
    admin/reset/           Réinitialisation des entrées
lib/
  config.js                Informations de la cérémonie à personnaliser
  store.js                 Accès aux données (Upstash Redis ou JSON local)
  auth.js                  Vérification du mot de passe par en-tête
  ids.js                   Génération d'identifiants uniques
data/
  guests.json              Liste des invités (source de vérité en mode local)
scripts/
  generate-guests.mjs      Génère/complète data/guests.json
```

---

## 9. Sécurité (bon à savoir)

- Les identifiants d'invité sont des chaînes de 6 caractères
  alphanumériques (~1 milliard de combinaisons) : difficiles à deviner,
  mais ce n'est pas un secret cryptographique. N'y mettez pas d'information
  sensible au-delà du nom.
- `/admin` et `/scan` sont protégées par un simple mot de passe partagé
  (pas de compte individuel). Adapté à un événement ponctuel ; changez les
  mots de passe après la cérémonie.
- Pensez à choisir des mots de passe différents et non triviaux pour
  `ADMIN_PASSWORD` et `SCAN_PASSWORD`.
