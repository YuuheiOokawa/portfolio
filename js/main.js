(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = current ? current === "dark" : prefersDark;
    var next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  var filterButtons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".project-card");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var filter = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var match = filter === "all" || card.getAttribute("data-category") === filter;
        card.hidden = !match;
      });
    });
  });

  var PREVIEW_NOTES = {
    down: "現在デプロイが一時停止中のため、ライブプレビューを表示できません。ソースコードはGitHubでご確認いただけます。",
    protected: "アクセス保護が有効なため、外部からのライブプレビューを表示できません。",
    dev: "現在ローカルで開発中のプロジェクトです（本番未公開）。"
  };

  var modal = document.getElementById("project-modal");
  var modalTitle = modal.querySelector(".modal-title");
  var modalDesc = modal.querySelector(".modal-desc");
  var modalTags = modal.querySelector(".modal-tags");
  var modalIframe = modal.querySelector(".modal-iframe");
  var modalNote = modal.querySelector(".modal-preview-note");
  var modalLiveLink = modal.querySelector(".modal-live-link");
  var modalGithubLink = modal.querySelector(".modal-github-link");
  var modalClose = modal.querySelector(".modal-close");
  var lastFocused = null;

  function openModal(card) {
    var status = card.getAttribute("data-status");
    var live = card.getAttribute("data-live") || "";
    var tags = (card.getAttribute("data-tags") || "").split(",").filter(Boolean);

    modalTitle.textContent = card.getAttribute("data-name") || "";
    modalDesc.textContent = card.getAttribute("data-desc") || "";
    modalTags.innerHTML = "";
    tags.forEach(function (tag) {
      var li = document.createElement("li");
      li.textContent = tag;
      modalTags.appendChild(li);
    });

    modalGithubLink.href = card.getAttribute("data-github") || "#";

    if (status === "live" && live) {
      modalIframe.src = live;
      modalIframe.hidden = false;
      modalNote.hidden = true;
      modalLiveLink.href = live;
      modalLiveLink.hidden = false;
    } else {
      modalIframe.src = "about:blank";
      modalIframe.hidden = true;
      modalNote.textContent = PREVIEW_NOTES[status] || "";
      modalNote.hidden = false;
      modalLiveLink.hidden = true;
    }

    lastFocused = document.activeElement;
    modal.hidden = false;
    modalClose.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeModal() {
    modal.hidden = true;
    modalIframe.src = "about:blank";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === "Escape") closeModal();
  }

  document.querySelectorAll(".card-detail-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn.closest(".project-card"));
    });
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });
})();
