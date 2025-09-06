# 📌 Trello-Clone  

Un clone simplifié de **Trello** construit avec **React** et **@dnd-kit**, permettant de gérer des projets avec un système de colonnes et de cartes en drag & drop.  

![Aperçu de l'application](./landing1.png)
![Aperçu de l'application](./landing2.png)
![Aperçu de l'application](./landing1.png)

## ✨ Fonctionnalités  

- 📋 Création de colonnes de type *To Do*, *In Progress*, *Code Review*, *QA*, *Done*  
- 🎯 Déplacement des cartes par **drag & drop** (powered by `@dnd-kit`)  
- 💡 Interface simple, rapide et intuitive  
- 🎨 UI moderne avec **Tailwind CSS**  
- 🔥 Architecture claire et extensible  

---

## 🚀 Démo  

👉 [Visiter mon Trello-Clone](https://trello-clone-azure-alpha.vercel.app/)


---

## 🛠️ Stack technique  

- ⚛️ **React** – framework front-end  
- 🎨 **Tailwind CSS** – pour le style rapide et moderne  
- 🖱️ **@dnd-kit/core** – pour le système de drag & drop  
- 🌐 **React Router** – pour la navigation (Landing page → Board)  

---

## 📂 Structure du projet  

```bash
src/
 ├── components/
 │   ├── Card.jsx        # Composant pour une carte
 │   ├── Column.jsx      # Composant pour une colonne
 │   └── Navbar.jsx      # Barre de navigation
 ├── pages/
 │   ├── LandingPage.jsx # Page d’accueil
 │   └── Home.jsx        # Page principale du board
 ├── App.jsx             # Routing principal
 └── main.jsx            # Entrée de l’app

 ```

## ⚡ Installation & lancement
Clone le projet et installe les dépendances :

```bash

# Clone le repo
git clone https://github.com/ton-compte/trello-clone.git

# Va dans le dossier
cd trello-clone

# Installe les dépendances
npm install

# Lance l’app
npm run dev