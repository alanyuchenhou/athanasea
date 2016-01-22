// push "search" template to primaryNav
Telescope.modules.add("primaryNav", {
  template: 'search',
  order: 100
});

Telescope.modules.add("contentTop", {
  template: 'search',
  order: 1
});

Telescope.colorElements.add('.search.empty .search-field', 'secondaryContrastColor');
