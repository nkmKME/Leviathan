

export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_Addtarea_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "Addtarea",
      "file": {
        "path": "src/routes/Addtarea.svelte",
        "dir": "src/routes",
        "base": "Addtarea.svelte",
        "ext": ".svelte",
        "name": "Addtarea"
      },
      "asyncModule": () => import('../src/routes/Addtarea.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_Calendario_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "Calendario",
      "file": {
        "path": "src/routes/Calendario.svelte",
        "dir": "src/routes",
        "base": "Calendario.svelte",
        "ext": ".svelte",
        "name": "Calendario"
      },
      "asyncModule": () => import('../src/routes/Calendario.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_Horario_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "Horario",
      "file": {
        "path": "src/routes/Horario.svelte",
        "dir": "src/routes",
        "base": "Horario.svelte",
        "ext": ".svelte",
        "name": "Horario"
      },
      "asyncModule": () => import('../src/routes/Horario.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_Recordatorio_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "Recordatorio",
      "file": {
        "path": "src/routes/Recordatorio.svelte",
        "dir": "src/routes",
        "base": "Recordatorio.svelte",
        "ext": ".svelte",
        "name": "Recordatorio"
      },
      "asyncModule": () => import('../src/routes/Recordatorio.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_Tareas_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "Tareas",
      "file": {
        "path": "src/routes/Tareas.svelte",
        "dir": "src/routes",
        "base": "Tareas.svelte",
        "ext": ".svelte",
        "name": "Tareas"
      },
      "asyncModule": () => import('../src/routes/Tareas.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}