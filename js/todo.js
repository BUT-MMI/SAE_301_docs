(function () {
  'use strict';

  var STORAGE_KEY = 'sae301_todo_state_v1';

  var SECTIONS = [
    {
      id: 'planning',
      title: 'Planning indicatif de la semaine',
      subtitle: 'Visez les personas en début de semaine : la charte et la maquette en dépendent.',
      tasks: [
        { id: 'plan-lun', title: 'Lundi 23 · Enquêter et analyser les réponses', note: 'Livrable attendu : notes d’entretiens et 2 personas en brouillon' },
        { id: 'plan-mar', title: 'Mardi 24 · Finaliser les personas, lancer la charte', note: 'Livrable attendu : 2 personas terminés, brief créatif, couleurs et typographies' },
        { id: 'plan-mer', title: 'Mercredi 25 · Logo, boutons, wireframes papier et maquette Figma', note: 'Livrable attendu : charte complète, wireframes des 7 écrans et maquette Figma' },
        { id: 'plan-jeu', title: 'Jeudi 26 · Avancer la maquette Figma', note: 'Livrable attendu : les 7 écrans en mobile et version ordinateur bien avancée' },
        { id: 'plan-ven', title: 'Vendredi 27 · Finitions, exports et dépôt sur Ametice', note: 'Échéance impérative : dossier déposé avant 18 h' }
      ]
    },
    {
      id: 'livrable-1',
      title: 'Livrable 1 · Les personas (en duo conseillé)',
      subtitle: 'Deux profils fixés par le sujet : le passager (sans compte) et le conducteur (avec compte).',
      tasks: [
        { id: 'l1-enquete', title: '1. Enquêter auprès d’étudiants de l’IUT', note: 'Interroger dont au moins un étudiant de 1re année et un étudiant qui vient en voiture' },
        { id: 'l1-analyse', title: '2. Analyser les retours d’entretiens', note: 'Relever les mots-clés, les craintes et les besoins qui reviennent le plus souvent' },
        { id: 'l1-concurrence', title: '3. Observer la « concurrence »', note: 'BlaBlaCar, groupes de promo sur les réseaux sociaux : ce qui rassure et ce qui manque' },
        { id: 'l1-incarner', title: '4. Incarner chaque persona', note: 'Prénom, âge, formation et année, lieu de vie/trajet, motivations, freins, attentes, citation, illustration' },
        { id: 'l1-check-1', title: 'Avant de rendre · 2 personas : un passager et un conducteur', note: 'Vérification obligatoire du livrable 1' },
        { id: 'l1-check-2', title: 'Avant de rendre · Les freins sont concrets', note: 'Ex. peur de monter avec un inconnu, horaires, coût…' },
        { id: 'l1-check-3', title: 'Avant de rendre · Vos recherches sont jointes au rendu', note: 'Notes d’entretiens et analyse incluses dans le document' }
      ]
    },
    {
      id: 'livrable-2',
      title: 'Livrable 2 · Charte graphique et logo (en groupe)',
      subtitle: 'Assez précise pour que l’équipe de développement puisse l’intégrer avec Bootstrap sans poser de questions.',
      tasks: [
        { id: 'l2-brief', title: '1. Rédiger le brief créatif', note: 'Mission (raison d’être), Vision (ambitions), Valeurs (principes fondateurs)' },
        { id: 'l2-logo', title: '2. Trouver le nom du site et décliner le logotype', note: 'Avec tagline, sans tagline, favicon, noir et blanc, fond transparent, sur fond coloré ou uni' },
        { id: 'l2-couleurs', title: '3. Définir les couleurs (règle 60/30/10 + Bootstrap)', note: 'Codes hexadécimaux, contraste texte >= 4,5:1 (WebAIM), rôles primary et secondary dans Bootstrap' },
        { id: 'l2-typo', title: '4. Choisir les typographies webfont', note: 'Au minimum une pour les titres et une pour les paragraphes (Google Fonts), avec tailles et graisses' },
        { id: 'l2-boutons', title: '5. Concevoir les boutons principal et secondaire', note: 'Décliner les 4 états : normal, survol, focus, désactivé' },
        { id: 'l2-check-1', title: 'Avant de rendre · Mission, vision et valeurs rédigées', note: 'Vérification obligatoire du livrable 2' },
        { id: 'l2-check-2', title: 'Avant de rendre · Les déclinaisons du logo, dont le favicon', note: 'Vérification obligatoire du livrable 2' },
        { id: 'l2-check-3', title: 'Avant de rendre · Couleurs en hexadécimal, contrastes vérifiés', note: 'Ratio minimum 4,5:1' },
        { id: 'l2-check-4', title: 'Avant de rendre · Typographies nommées, avec tailles et graisses', note: 'Vérification obligatoire du livrable 2' },
        { id: 'l2-check-5', title: 'Avant de rendre · Boutons principal et secondaire avec leurs états', note: 'Normal, survol, focus, désactivé' },
        { id: 'l2-check-6', title: 'Avant de rendre · Charte exportée en PDF, logos en SVG et PNG', note: 'Vérification obligatoire du livrable 2' }
      ]
    },
    {
      id: 'livrable-3',
      title: 'Livrable 3 · Maquette finale Figma (en groupe)',
      subtitle: 'Les 7 écrans du sujet, en version mobile et ordinateur : 14 maquettes haute fidélité.',
      tasks: [
        { id: 'l3-wireframes', title: '1. Esquisser les wireframes papier des 7 écrans (conseillé)', note: 'Régler l’organisation des pages avant d’ouvrir Figma' },
        { id: 'l3-kit', title: '2. Dupliquer le kit UI Bootstrap sur Figma (« Get a copy »)', note: 'Partir des composants Bootstrap 5 plutôt que de tout redessiner' },
        { id: 'l3-grille', title: '3. Caler les écrans sur la grille Bootstrap', note: '12 colonnes, gouttière de 24 px' },
        { id: 'l3-styles', title: '4. Créer les styles de couleurs et de textes dans Figma', note: 'Appliquer les styles de votre charte partout' },
        { id: 'l3-mobile', title: '5. Maquetter les 7 écrans en mobile d’abord', note: 'Accueil/recherche, Résultats, Fiche trajet avec carte, Connexion/inscription, Publier un trajet, Mes annonces, Profil' },
        { id: 'l3-desktop', title: '6. Décliner les 7 écrans en version ordinateur', note: 'Total : 7 écrans × 2 formats = 14 maquettes' },
        { id: 'l3-check-1', title: 'Avant de rendre · 14 écrans avec des frames nommées clairement', note: 'Ex. fiche-trajet' },
        { id: 'l3-check-2', title: 'Avant de rendre · Contenus réalistes sans lorem ipsum', note: 'Vrais noms de lieux et horaires (ex. Vitrolles, Salon-de-Provence, Tarascon, IUT d’Arles)' },
        { id: 'l3-check-3', title: 'Avant de rendre · Boutons et zones cliquables d’au moins 44 px de haut', note: 'Accessibilité tactile et ergonomique' },
        { id: 'l3-check-4', title: 'Avant de rendre · La carte toujours accompagnée de l’itinéraire en texte', note: 'Accessibilité et compréhension rapide' },
        { id: 'l3-check-5', title: 'Avant de rendre · Lien de partage Figma en lecture testé en navigation privée', note: 'Accessible sans compte du groupe' },
        { id: 'l3-check-6', title: 'Avant de rendre · Export PDF des 14 écrans', note: 'Vérification obligatoire du livrable 3' }
      ]
    },
    {
      id: 'rendu-final',
      title: 'Checklist avant le rendu final sur Ametice',
      subtitle: 'Le chef de projet dépose un seul dossier par groupe avant le vendredi 27/11/2026 à 18 h (-5 % par heure de retard).',
      tasks: [
        { id: 'rf-dossier', title: 'Le sous-dossier porte le nom de chaque membre du groupe', note: 'Format imposé : DX-Noms-de-chaque-membre-du-groupe' },
        { id: 'rf-livrables', title: 'Les trois livrables sont présents et s’ouvrent correctement', note: '1. Personas · 2. Charte graphique et logo · 3. Maquette finale' },
        { id: 'rf-figma', title: 'Le lien Figma est accessible sans compte du groupe', note: 'Testé en fenêtre de navigation privée' },
        { id: 'rf-ametice', title: 'Le dépôt est fait sur Ametice avant le vendredi 27 novembre à 18 h', note: 'Confirmation du dépôt final' }
      ]
    }
  ];

  var state = {
    version: 1,
    groupName: '',
    checked: {},
    customTasks: []
  };

  var currentFilter = 'all';

  /* Éléments DOM */
  var listRoot = document.getElementById('todo-sections-root');
  var progressFill = document.getElementById('todo-progress-fill');
  var progressText = document.getElementById('todo-progress-text');
  var groupInput = document.getElementById('todo-group-name');
  var exportBtn = document.getElementById('todo-export-btn');
  var importBtn = document.getElementById('todo-import-btn');
  var importInput = document.getElementById('todo-import-input');
  var resetBtn = document.getElementById('todo-reset-btn');
  var statusBanner = document.getElementById('todo-status-banner');
  var filterButtons = document.querySelectorAll('[data-todo-filter]');
  var addTaskForm = document.getElementById('todo-add-form');
  var customTitleInput = document.getElementById('custom-task-title');
  var customSectionSelect = document.getElementById('custom-task-section');

  if (!listRoot) return;

  function showStatus(message, isError) {
    if (!statusBanner) return;
    statusBanner.textContent = message;
    statusBanner.classList.toggle('is-error', Boolean(isError));
    statusBanner.hidden = false;
  }

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      applyImportedObject(parsed, false);
    } catch (e) {
      // Ignore corrupted local storage
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      showStatus('Impossible de sauvegarder dans le navigateur (stockage local indisponible). Utilisez l’export JSON.', true);
    }
  }

  function getAllValidTaskIds() {
    var ids = {};
    SECTIONS.forEach(function (sec) {
      sec.tasks.forEach(function (t) {
        ids[t.id] = true;
      });
    });
    state.customTasks.forEach(function (t) {
      ids[t.id] = true;
    });
    return ids;
  }

  function applyImportedObject(obj, announce) {
    if (!obj || typeof obj !== 'object') {
      throw new Error('Format JSON invalide.');
    }
    if (obj.checked !== undefined && (typeof obj.checked !== 'object' || obj.checked === null || Array.isArray(obj.checked))) {
      throw new Error('Le champ "checked" doit être un objet.');
    }
    if (obj.customTasks !== undefined && !Array.isArray(obj.customTasks)) {
      throw new Error('Le champ "customTasks" doit être une liste.');
    }

    var nextCustom = [];
    if (Array.isArray(obj.customTasks)) {
      obj.customTasks.forEach(function (item) {
        if (item && typeof item.id === 'string' && typeof item.title === 'string' && item.title.trim()) {
          var validSection = SECTIONS.some(function (s) { return s.id === item.sectionId; })
            ? item.sectionId
            : SECTIONS[0].id;
          nextCustom.push({
            id: item.id,
            sectionId: validSection,
            title: item.title.trim(),
            note: typeof item.note === 'string' ? item.note : 'Tâche ajoutée par l’équipe'
          });
        }
      });
    }

    state.groupName = typeof obj.groupName === 'string' ? obj.groupName : '';
    state.customTasks = nextCustom;

    var validIds = getAllValidTaskIds();
    var nextChecked = {};
    if (obj.checked) {
      Object.keys(obj.checked).forEach(function (key) {
        if (validIds[key] && obj.checked[key] === true) {
          nextChecked[key] = true;
        }
      });
    }
    state.checked = nextChecked;

    if (groupInput) {
      groupInput.value = state.groupName;
    }

    saveState();
    render();

    if (announce) {
      var doneCount = Object.keys(state.checked).length;
      showStatus('Sauvegarde importée avec succès (' + doneCount + ' tâche(s) cochée(s)).', false);
    }
  }

  function getTasksForSection(section) {
    var extras = state.customTasks.filter(function (t) {
      return t.sectionId === section.id;
    }).map(function (t) {
      return {
        id: t.id,
        title: t.title,
        note: t.note,
        isCustom: true
      };
    });
    return section.tasks.concat(extras);
  }

  function updateGlobalProgress() {
    var total = 0;
    var done = 0;
    SECTIONS.forEach(function (sec) {
      var tasks = getTasksForSection(sec);
      total += tasks.length;
      tasks.forEach(function (t) {
        if (state.checked[t.id]) done += 1;
      });
    });

    var pct = total > 0 ? Math.round((done / total) * 100) : 0;
    if (progressFill) {
      progressFill.style.width = pct + '%';
    }
    if (progressText) {
      progressText.textContent = done + ' / ' + total + ' terminées (' + pct + ' %)';
    }
  }

  function render() {
    listRoot.innerHTML = '';

    SECTIONS.forEach(function (section) {
      var allTasks = getTasksForSection(section);
      var sectionDone = allTasks.filter(function (t) { return Boolean(state.checked[t.id]); }).length;

      var visibleTasks = allTasks.filter(function (t) {
        var isDone = Boolean(state.checked[t.id]);
        if (currentFilter === 'pending') return !isDone;
        if (currentFilter === 'done') return isDone;
        return true;
      });

      var secEl = document.createElement('section');
      secEl.className = 'todo-section';
      secEl.setAttribute('aria-labelledby', 'heading-' + section.id);

      var headerEl = document.createElement('div');
      headerEl.className = 'todo-section-header';

      var titleWrap = document.createElement('div');
      var h2 = document.createElement('h2');
      h2.id = 'heading-' + section.id;
      h2.textContent = section.title;
      titleWrap.appendChild(h2);

      var sub = document.createElement('p');
      sub.className = 'card-meta';
      sub.style.marginBottom = '0';
      sub.textContent = section.subtitle;
      titleWrap.appendChild(sub);

      var counter = document.createElement('span');
      counter.className = sectionDone === allTasks.length && allTasks.length > 0 ? 'badge badge-green' : 'badge';
      counter.textContent = sectionDone + ' / ' + allTasks.length;

      headerEl.appendChild(titleWrap);
      headerEl.appendChild(counter);
      secEl.appendChild(headerEl);

      var ul = document.createElement('ul');
      ul.className = 'todo-list';

      if (visibleTasks.length === 0) {
        var emptyLi = document.createElement('li');
        emptyLi.className = 'todo-item';
        emptyLi.textContent = currentFilter === 'done'
          ? 'Aucune tâche cochée dans cette catégorie pour le moment.'
          : 'Toutes les tâches de cette catégorie sont cochées.';
        ul.appendChild(emptyLi);
      } else {
        visibleTasks.forEach(function (task) {
          var isDone = Boolean(state.checked[task.id]);
          var li = document.createElement('li');
          li.className = isDone ? 'todo-item is-done' : 'todo-item';

          var label = document.createElement('label');
          label.className = 'todo-label';

          var checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.className = 'todo-checkbox';
          checkbox.checked = isDone;
          checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
              state.checked[task.id] = true;
            } else {
              delete state.checked[task.id];
            }
            saveState();
            render();
          });

          var textWrap = document.createElement('span');
          textWrap.className = 'todo-text-wrap';

          var titleSpan = document.createElement('span');
          titleSpan.className = 'todo-title';
          titleSpan.textContent = task.title;
          textWrap.appendChild(titleSpan);

          if (task.note) {
            var noteSpan = document.createElement('span');
            noteSpan.className = 'todo-note';
            noteSpan.textContent = task.note;
            textWrap.appendChild(noteSpan);
          }

          label.appendChild(checkbox);
          label.appendChild(textWrap);
          li.appendChild(label);

          if (task.isCustom) {
            var delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'todo-delete-btn';
            delBtn.textContent = 'Supprimer';
            delBtn.setAttribute('aria-label', 'Supprimer la tâche ' + task.title);
            delBtn.addEventListener('click', function () {
              state.customTasks = state.customTasks.filter(function (c) {
                return c.id !== task.id;
              });
              delete state.checked[task.id];
              saveState();
              render();
              showStatus('Tâche personnalisée supprimée.', false);
            });
            li.appendChild(delBtn);
          }

          ul.appendChild(li);
        });
      }

      secEl.appendChild(ul);
      listRoot.appendChild(secEl);
    });

    updateGlobalProgress();
  }

  /* Nom du groupe */
  if (groupInput) {
    groupInput.addEventListener('input', function () {
      state.groupName = groupInput.value;
      saveState();
    });
  }

  /* Filtres */
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentFilter = btn.getAttribute('data-todo-filter') || 'all';
      filterButtons.forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      render();
    });
  });

  /* Ajout d'une tâche personnalisée */
  if (addTaskForm && customTitleInput && customSectionSelect) {
    addTaskForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var title = customTitleInput.value.trim();
      if (!title) return;

      var newTask = {
        id: 'custom-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
        sectionId: customSectionSelect.value || SECTIONS[0].id,
        title: title,
        note: 'Tâche ajoutée manuellement'
      };
      state.customTasks.push(newTask);
      customTitleInput.value = '';
      saveState();
      render();
      showStatus('Tâche ajoutée : « ' + title + ' ».', false);
    });
  }

  /* Export JSON */
  if (exportBtn) {
    exportBtn.addEventListener('click', function () {
      var now = new Date();
      var yyyy = now.getFullYear();
      var mm = String(now.getMonth() + 1).padStart(2, '0');
      var dd = String(now.getDate()).padStart(2, '0');
      var payload = {
        version: 1,
        project: 'SAE 301-303 - Portail de covoiturage IUT Arles',
        exportedAt: now.toISOString(),
        groupName: state.groupName,
        checked: state.checked,
        customTasks: state.customTasks
      };

      var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'sae301-todolist-' + yyyy + '-' + mm + '-' + dd + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showStatus('Fichier de sauvegarde exporté (' + a.download + ').', false);
    });
  }

  /* Import JSON */
  if (importBtn && importInput) {
    importBtn.addEventListener('click', function () {
      importInput.value = '';
      importInput.click();
    });

    importInput.addEventListener('change', function () {
      var file = importInput.files && importInput.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function () {
        try {
          var parsed = JSON.parse(String(reader.result));
          applyImportedObject(parsed, true);
        } catch (err) {
          showStatus('Erreur lors de l’importation : fichier JSON invalide ou incompatible.', true);
        }
      };
      reader.onerror = function () {
        showStatus('Impossible de lire le fichier sélectionné.', true);
      };
      reader.readAsText(file, 'UTF-8');
    });
  }

  /* Réinitialisation */
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      var confirmed = window.confirm('Voulez-vous vraiment décocher toutes les tâches et supprimer les tâches personnalisées ?');
      if (!confirmed) return;
      state.checked = {};
      state.customTasks = [];
      state.groupName = '';
      if (groupInput) groupInput.value = '';
      saveState();
      render();
      showStatus('La to-do list a été réinitialisée.', false);
    });
  }

  loadState();
  if (groupInput) {
    groupInput.value = state.groupName;
  }
  render();
})();
