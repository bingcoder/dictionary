document.body.addEventListener(
  "input",
  (e) => {
    const target = e.target;
    if (target?.id === "localsearch-input") {
      e.stopPropagation();
      const list = document.querySelector(".results");
      list.innerHTML = "";
      if (!target.value || !target.value.trim()) {
        return;
      }
      const items = [
        ...new Set(
          (window.localSearchFile || [])
            .filter(
              (item) =>
                item.name.includes(target.value) ||
                item.trans.join().includes(target.value)
            )
            .slice(0, 10)
        ),
      ];

      const temp = document.createDocumentFragment();
      items.forEach(({ name, trans }) => {
        const li = document.createElement("li");
        li.addEventListener("click", () => {
          dispatchEvent(
            new KeyboardEvent("keydown", {
              key: "Escape",
            })
          );
        });

        const content = `<span class="text">${name.replaceAll(
          target.value,
          `<mark>${target.value}</mark>`
        )} ${(typeof trans === "string" ? trans : trans.join("、")).replaceAll(
          target.value,
          `<mark>${target.value}</mark>`
        )}</span>`;
        li.innerHTML = `
  <a
    href="${location.pathname}#${name}"
    class="result"
    >
    <div>
      <div class="titles">
        <span class="title-icon">#</span
        ><span class="title main">${content}</span>
      </div>
    </div>
  </a>
      `;
        temp.appendChild(li);
      });
      list.appendChild(temp);

      if (!items.length) {
        list.innerHTML = `<li class="no-results">无法找到相关结果 "<strong>${target.value}</strong>" </li>`;
      }
    }
  },
  {
    capture: true,
  }
);

window.addEventListener("hashchange", (e) => {
  const ele = document.querySelector(
    `div[data-id='${window.location.hash.replace("#", "")}']`
  );
  if (ele) {
    const offset = document.body.clientWidth < 960 ? 80 : 20;
    window.scrollTo({
      top: ele.offsetTop + offset,
      behavior: "smooth",
    });
  }
});
